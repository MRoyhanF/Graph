import express from "express";
import pkg from "graphology";
import { flights } from "./data/flights.js";

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

// Endpoint 2: Pencarian penerbangan dengan transit
app.get("/search", (req, res) => {
  const { from, to, date } = req.query;

  // Jika tidak ada parameter, kembalikan semua penerbangan
  if (!from && !to && !date) {
    return res.json({
      message: "All flight data",
      totalPenerbangan: flights.length,
      data: flights,
    });
  }

  // Filter penerbangan berdasarkan parameter yang ada
  let filteredFlights = flights;

  if (from) {
    filteredFlights = filteredFlights.filter((flight) => flight.from === from);
  }

  if (to) {
    filteredFlights = filteredFlights.filter((flight) => flight.to === to);
  }

  if (date) {
    filteredFlights = filteredFlights.filter((flight) => flight.date === date);
  }

  // Jika ada parameter `from` dan `to`, lakukan pencarian transit
  if (from && to) {
    if (!flightGraph.hasNode(from) || !flightGraph.hasNode(to)) {
      return res.status(404).json({
        message: "Invalid airports. No data found.",
        data: [],
      });
    }

    const allPaths = [];
    const visited = new Set();

    function findPaths(currentNode, targetNode, path) {
      if (visited.has(currentNode)) return;
      visited.add(currentNode);
      path.push(currentNode);

      if (currentNode === targetNode) {
        allPaths.push(path.slice());
      } else {
        flightGraph.neighbors(currentNode).forEach((neighbor) => {
          findPaths(neighbor, targetNode, path);
        });
      }
      path.pop();
      visited.delete(currentNode);
    }

    findPaths(from, to, []);

    if (allPaths.length === 0) {
      return res.status(404).json({
        message: "No valid path found.",
        data: [],
      });
    }

    const routes = [];
    let totalDistance = 0;

    allPaths.forEach((path, pathIndex) => {
      const pathRoutes = [];
      let pathDistance = 0;

      for (let i = 0; i < path.length - 1; i++) {
        const segment = flights.find((flight) => flight.from === path[i] && flight.to === path[i + 1] && (!date || flight.date === date));

        if (!segment) {
          return;
        }

        pathDistance += segment.distance;
        pathRoutes.push({
          sequence: i + 1,
          idFlight: segment.id,
          distance: segment.distance,
          from: segment.from,
          to: segment.to,
          arrivalTime: segment.arrivalTime,
          departureTime: segment.departureTime,
          date: segment.date,
        });
      }

      totalDistance += pathDistance;
      if (pathRoutes.length > 0) {
        routes.push({
          penerbangan: pathIndex + 1,
          isTransit: path.length > 2,
          from: path[0],
          to: path[path.length - 1],
          route: pathRoutes,
        });
      }
    });

    return res.json({
      message: "Transmitting data",
      totalPenerbangan: routes.length,
      departureLocation: from,
      arrivalLocation: to,
      totalDistance,
      data: routes,
    });
  }

  // Jika hasil filter kosong, kembalikan pesan bahwa tidak ada penerbangan yang sesuai
  if (filteredFlights.length === 0) {
    return res.status(404).json({
      message: "No matching flights found.",
      data: [],
    });
  }

  // Kembalikan hasil filter
  return res.json({
    message: "Filtered flight data",
    totalPenerbangan: filteredFlights.length,
    data: filteredFlights,
  });
});

// Endpoint 3: Detail Flight
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
  console.log(`Server Running At http://localhost:${port}`);
});
