import express from "express";
import pkg from "graphology";
import { singleSource } from "graphology-shortest-path";
import { flights } from "../data/flights.js";

const { MultiUndirectedGraph } = pkg; // Gunakan multi-undirected graph untuk mendukung multi-edges

const app = express();
const port = 3000;

// Inisialisasi graf sebagai multi-graph
const flightGraph = new MultiUndirectedGraph();

// Menambahkan simpul dan sisi ke graf
flights.forEach(({ id, from, to, distance }) => {
  if (!flightGraph.hasNode(from)) flightGraph.addNode(from);
  if (!flightGraph.hasNode(to)) flightGraph.addNode(to);

  // Tambahkan sisi (edge) dengan properti
  flightGraph.addEdge(from, to, { id, distance });
});

// Endpoint 1: Mendapatkan semua data penerbangan
app.get("/flights", (req, res) => {
  res.json({
    message: "All flights data",
    total: flights.length,
    data: flights,
  });
});

// Endpoint 2: Pencarian penerbangan dengan opsi transit
app.get("/search", (req, res) => {
  const { from, to, date } = req.query;

  if (!from || !to) {
    return res.status(400).json({
      message: "Invalid query parameters. 'from' and 'to' are required.",
      data: [],
    });
  }

  if (!flightGraph.hasNode(from) || !flightGraph.hasNode(to)) {
    return res.status(404).json({
      message: "Invalid airports. No data found.",
      data: [],
    });
  }

  // Menggunakan algoritma shortest path dari graphology
  const shortestPaths = singleSource(flightGraph, from, { weightAttribute: "distance" });

  if (!shortestPaths[to]) {
    return res.status(404).json({
      message: "No route found.",
      data: [],
    });
  }

  const path = shortestPaths[to];
  if (!path || path.length === 0) {
    return res.status(404).json({
      message: "No valid path found.",
      data: [],
    });
  }

  // Menambahkan penerbangan dengan opsi transit berdasarkan path
  const validFlights = flights.filter((flight) => (date ? flight.date === date : true));
  const routes = [];
  let totalDistance = 0;

  for (let i = 0; i < path.length - 1; i++) {
    const segment = validFlights.find((flight) => flight.from === path[i] && flight.to === path[i + 1]);

    if (!segment) {
      return res.status(404).json({
        message: "No valid flights for the given path.",
        data: [],
      });
    }

    totalDistance += segment.distance;
    routes.push({
      sequence: i + 1,
      distance: segment.distance,
      from: segment.from,
      to: segment.to,
      arrivalTime: segment.arrivalTime,
      departureTime: segment.departureTime,
      date: segment.date,
    });
  }

  // Membuat response sesuai format yang diinginkan
  res.json({
    message: "Transmitting data",
    totalPenerbangan: routes.length,
    departureLocation: from,
    arrivalLocation: to,
    totalDistance,
    data: routes.map((route, index) => ({
      penerbangan: index + 1,
      isTransit: routes.length > 1,
      from: route.from,
      to: route.to,
      route: [
        {
          sequence: route.sequence,
          distance: route.distance,
          from: route.from,
          to: route.to,
          arrivalTime: route.arrivalTime,
          departureTime: route.departureTime,
          date: route.date,
        },
      ],
    })),
  });
});

// Endpoint 3: Detail penerbangan berdasarkan ID
app.get("/flights/:id", (req, res) => {
  const { id } = req.params;
  const flight = flights.find((f) => f.id === parseInt(id, 10));

  if (!flight) {
    return res.status(404).json({
      message: "Flight not found.",
      data: null,
    });
  }

  res.json({
    message: "Flight detail",
    data: flight,
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
