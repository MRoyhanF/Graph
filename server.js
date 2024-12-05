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

  const validFlights = flights.filter((flight) => (date ? flight.date === date : true));
  const routes = [];
  const uniqueRoutes = new Set(); // Set untuk memastikan tidak ada rute duplikat
  let totalDistance = 0;

  // **Periksa penerbangan langsung terlebih dahulu**
  const directFlight = validFlights.find((flight) => flight.from === from && flight.to === to);

  if (directFlight) {
    const routeKey = `${directFlight.from}-${directFlight.to}`;
    if (!uniqueRoutes.has(routeKey)) {
      routes.push({
        penerbangan: routes.length + 1,
        isTransit: false,
        from: directFlight.from,
        to: directFlight.to,
        route: [
          {
            sequence: 1,
            idFlight: directFlight.id,
            distance: directFlight.distance,
            from: directFlight.from,
            to: directFlight.to,
            arrivalTime: directFlight.arrivalTime,
            departureTime: directFlight.departureTime,
            date: directFlight.date,
          },
        ],
      });
      uniqueRoutes.add(routeKey);
      totalDistance += directFlight.distance;
    }
  }

  // **Cari semua jalur transit hanya jika tidak ada penerbangan langsung**
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

  if (allPaths.length === 0 && routes.length === 0) {
    return res.status(404).json({
      message: "No valid path found.",
      data: [],
    });
  }

  // **Proses rute transit**
  allPaths.forEach((path) => {
    const pathKey = path.join("-"); // Buat key unik untuk rute transit
    if (uniqueRoutes.has(pathKey)) return; // Lewati jika sudah ada

    const pathRoutes = [];
    let pathDistance = 0;
    let validPath = true;

    for (let i = 0; i < path.length - 1; i++) {
      const segment = validFlights.find((flight) => flight.from === path[i] && flight.to === path[i + 1]);

      if (!segment) {
        validPath = false;
        break;
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

    if (validPath) {
      routes.push({
        penerbangan: routes.length + 1,
        isTransit: path.length > 2,
        from: path[0],
        to: path[path.length - 1],
        route: pathRoutes,
      });
      uniqueRoutes.add(pathKey);
      totalDistance += pathDistance;
    }
  });

  res.json({
    message: "Transmitting data",
    totalPenerbangan: routes.length,
    departureLocation: from,
    arrivalLocation: to,
    totalDistance,
    data: routes,
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
