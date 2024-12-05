export const flights = [
  //   { id: 1, from: "PALEMBANG", to: "JAKARTA", distance: 600, arrivalTime: "10:00", departureTime: "09:00", date: "2024-12-06" },
  { id: 2, from: "JAKARTA", to: "MAKASSAR", distance: 1000, arrivalTime: "12:00", departureTime: "11:00", date: "2024-12-06" },
  { id: 3, from: "PALEMBANG", to: "MAKASSAR", distance: 1600, arrivalTime: "12:00", departureTime: "10:00", date: "2024-12-06" }, // Penerbangan langsung
  { id: 4, from: "PALEMBANG", to: "JAKARTA", distance: 600, arrivalTime: "08:00", departureTime: "07:00", date: "2024-12-06" },
  { id: 5, from: "JAKARTA", to: "BALI", distance: 800, arrivalTime: "09:30", departureTime: "09:00", date: "2024-12-06" },
  { id: 6, from: "BALI", to: "MAKASSAR", distance: 500, arrivalTime: "11:30", departureTime: "10:30", date: "2024-12-06" },
];

// export const flights = [
//   { id: 1, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-06" },
//   { id: 2, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-06" },
//   { id: 3, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-06" },
//   { id: 4, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-06" },
//   // Tambahkan 26 penerbangan lainnya...
//   { id: 5, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-07" },
//   { id: 6, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-07" },
//   { id: 7, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-07" },
//   { id: 8, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-07" },
//   { id: 9, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-08" },
//   { id: 10, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-08" },
//   { id: 11, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-08" },
//   { id: 12, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-08" },
//   { id: 13, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-09" },
//   { id: 14, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-09" },
//   { id: 15, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-09" },
//   { id: 16, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-09" },
//   { id: 17, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-10" },
//   { id: 18, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-10" },
//   { id: 19, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-10" },
//   { id: 20, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-10" },
//   { id: 21, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-11" },
//   { id: 22, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-11" },
//   { id: 23, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-11" },
//   { id: 24, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-11" },
//   { id: 25, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-12" },
//   { id: 26, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-12" },
//   { id: 27, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-12" },
//   { id: 28, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-12" },
//   { id: 29, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-13" },
//   { id: 30, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-13" },
//   { id: 31, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-13" },
//   { id: 32, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-13" },
//   { id: 33, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-14" },
//   { id: 34, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-14" },
//   { id: 35, from: "BALI", to: "SURABAYA", distance: 500, arrivalTime: "15:00", departureTime: "14:00", date: "2024-12-14" },
//   { id: 36, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "16:00", date: "2024-12-14" },
//   { id: 37, from: "MEDAN", to: "JAKARTA", distance: 1200, arrivalTime: "10:00", departureTime: "08:00", date: "2024-12-15" },
//   { id: 38, from: "JAKARTA", to: "BALI", distance: 1150, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-15" },

//   // Penerbangan langsung (Palembang - Makassar)
//   { id: 39, from: "PALEMBANG", to: "MAKASSAR", distance: 1600, arrivalTime: "12:00", departureTime: "10:00", date: "2024-12-06" },
//   { id: 40, from: "PALEMBANG", to: "MAKASSAR", distance: 1600, arrivalTime: "12:00", departureTime: "10:00", date: "2024-12-07" },

//   // Transit melalui Jakarta
//   { id: 41, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-06" },
//   { id: 42, from: "JAKARTA", to: "MAKASSAR", distance: 800, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-06" },

//   { id: 43, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-07" },
//   { id: 44, from: "JAKARTA", to: "MAKASSAR", distance: 800, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-07" },

//   // Transit melalui Jakarta dan Surabaya
//   { id: 45, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-06" },
//   { id: 46, from: "JAKARTA", to: "SURABAYA", distance: 500, arrivalTime: "12:00", departureTime: "10:00", date: "2024-12-06" },
//   { id: 47, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "15:00", date: "2024-12-06" },

//   { id: 48, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-07" },
//   { id: 49, from: "JAKARTA", to: "SURABAYA", distance: 500, arrivalTime: "12:00", departureTime: "10:00", date: "2024-12-07" },
//   { id: 50, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "15:00", date: "2024-12-07" },

//   // Transit melalui Jakarta dan Yogyakarta
//   { id: 51, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-06" },
//   { id: 52, from: "JAKARTA", to: "YOGYAKARTA", distance: 500, arrivalTime: "11:00", departureTime: "09:00", date: "2024-12-06" },
//   { id: 53, from: "YOGYAKARTA", to: "MAKASSAR", distance: 600, arrivalTime: "15:00", departureTime: "13:00", date: "2024-12-06" },

//   { id: 54, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-07" },
//   { id: 55, from: "JAKARTA", to: "YOGYAKARTA", distance: 500, arrivalTime: "11:00", departureTime: "09:00", date: "2024-12-07" },
//   { id: 56, from: "YOGYAKARTA", to: "MAKASSAR", distance: 600, arrivalTime: "15:00", departureTime: "13:00", date: "2024-12-07" },

//   // Transit melalui Jakarta, Yogyakarta, dan Surabaya
//   { id: 57, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-06" },
//   { id: 58, from: "JAKARTA", to: "YOGYAKARTA", distance: 500, arrivalTime: "11:00", departureTime: "09:00", date: "2024-12-06" },
//   { id: 59, from: "YOGYAKARTA", to: "SURABAYA", distance: 300, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-06" },
//   { id: 60, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "15:00", date: "2024-12-06" },

//   { id: 61, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-07" },
//   { id: 62, from: "JAKARTA", to: "YOGYAKARTA", distance: 500, arrivalTime: "11:00", departureTime: "09:00", date: "2024-12-07" },
//   { id: 63, from: "YOGYAKARTA", to: "SURABAYA", distance: 300, arrivalTime: "13:00", departureTime: "11:00", date: "2024-12-07" },
//   { id: 64, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "15:00", date: "2024-12-07" },

//   // Transit melalui Jakarta, Surabaya, dan Makassar
//   { id: 65, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-06" },
//   { id: 66, from: "JAKARTA", to: "SURABAYA", distance: 500, arrivalTime: "12:00", departureTime: "10:00", date: "2024-12-06" },
//   { id: 67, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "15:00", date: "2024-12-06" },

//   { id: 68, from: "PALEMBANG", to: "JAKARTA", distance: 300, arrivalTime: "09:00", departureTime: "07:00", date: "2024-12-07" },
//   { id: 69, from: "JAKARTA", to: "SURABAYA", distance: 500, arrivalTime: "12:00", departureTime: "10:00", date: "2024-12-07" },
//   { id: 70, from: "SURABAYA", to: "MAKASSAR", distance: 800, arrivalTime: "17:00", departureTime: "15:00", date: "2024-12-07" },
// ];
