import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

//Initialize the Supabase
const supabase = createClient(
    'https://byhmrzlbywzippsrilfl.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aG1yemxieXd6aXBwc3JpbGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MjkxNjYsImV4cCI6MjA4OTMwNTE2Nn0.IU3_m1xjzh3UM2A6CvhrSxcNL65QKpW2YQVebxhBbQo'
);

async function fetchLeaderboard() {
    const listDiv = document.getElementById('list');

    //Get data from Supabase
    const { data, error } = await supabase
        .from('leaderboard')
        .select('username, score')
        .order('score', { ascending: false })
        .limit(5); // Only show top 5

    //Handle Errors
    if (error) {
        console.error("Supabase Error:", error.message);
        if (listDiv) listDiv.innerText = "Failed to load scores.";
        return;
    }

    //Display Data
    if (listDiv && data) {
        listDiv.innerHTML = data.map(user => `<p><strong>${user.username}</strong>: ${user.score}</p>`).join(''); //Joins the array into a clean string of HTML
    }
}


//Get the input from html
const saveBtn = document.getElementById('save_btn');
const nameInput = document.getElementById('name_input');

//tell what to do when clicked
saveBtn.addEventListener('click', async () => {
//get what's typed
  const username = nameInput.value
//get current timer number
  const finalScore = window.seconds;

  if (!username) {
  alert("write something >< first");
  return;
}

alert(`Saving ${username}'s score of ${finalScore}...`);

//send it to supabase (the database platform im using)
const { error } = await supabase
  .from('leaderboard')
  .insert([{ username: username, score: finalScore }]);

if (error) { 
  console.error("Save failed:", error.message);
}
else {
 alert  ("Your score is saved! ^^ Refresh to see");

//refresh the page for new score
  location.reload();
  }
fetchLeaderboard();
});
fetchLeaderboard
