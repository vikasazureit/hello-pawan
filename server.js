const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const now = new Date();

    const day = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    const date = now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Hello Pawan</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
            background: #f5f5f5;
        }

        .container {
            background: white;
            width: 500px;
            max-width: 90%;
            margin: auto;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        h1 {
            font-size: 42px;
        }

        h2 {
            font-weight: normal;
        }

        p {
            color: #666;
        }
    </style>
</head>

<body>

    <div class="container">

        <h1>Hello Pawan! 👋</h1>

        <h2>Today is ${day}</h2>

        <h2>Date is ${date}</h2>

        <p>This application is deployed using Azure DevOps.</p>

    </div>

</body>
</html>
    `);
});

server.listen(PORT, () => {
    console.log(`Hello Pawan application running on port ${PORT}`);
});
