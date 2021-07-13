// Global Error Handler

process.on("uncaughtException", err => {
    console.log("Error Code - ", err);
    process.exit()
})

nonExist();

