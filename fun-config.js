{
  port: process.env.PORT,
  adminport: 8161,
  backends: [
    "./backends/console",     
    "./node_modules/aws-cloudwatch-statsd-backend"
  ],
  log: {
    level: "LOG_INFO"
  },
  cloudwatch: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "US_WEST_2",
    namespace: "sidekick/fun-node"
  }
}
