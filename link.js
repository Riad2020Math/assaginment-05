
document.addEventListener("DOMContentLoaded", function () {
    const taskCount = document.getElementById("task-count");
    const completedCount = document.getElementById("completed-count");
    const activityLog = document.getElementById("activity-log");
    const dateDisplay = document.getElementById("date-display");

    let tasksRemaining = 6, completedTasks = 23;

    dateDisplay.textContent = new Date().toLocaleDateString("en-US", { 
        weekday: "short", day: "numeric", month: "long", year: "numeric" 
    });

    document.querySelectorAll(".btn-primary").forEach(btn => {
        btn.addEventListener("click", function () {
            alert("Board Updated Successfully");

            if (tasksRemaining > 0) {
                tasksRemaining--; completedTasks++;
                taskCount.textContent = tasksRemaining;
                completedCount.textContent = completedTasks;
                activityLog.innerHTML += `<p class="text-[18px] text-[#00303C] my-2">You have completed the task fix mobile button issue at ${new Date().toLocaleTimeString()}</p>`;
                this.disabled = true; this.textContent = "Completed"; this.classList.add("bg-gray-400");
                if (tasksRemaining === 0) setTimeout(() => alert("Congrates!!! You have completed all the current task."), 500);
            }
        });
    });

    document.getElementById("clear-history-btn").addEventListener("click", () => activityLog.innerHTML = "");

    document.getElementById("blog-page-btn").addEventListener("click", () => window.location.href = "blogs.html");
    document.getElementById("back-to-desk").addEventListener("click", () => window.location.href = "index.html");

});
