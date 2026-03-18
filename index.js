import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient('https://byhmrzlbywzippsrilfl.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aG1yemxieXd6aXBwc3JpbGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MjkxNjYsImV4cCI6MjA4OTMwNTE2Nn0.IU3_m1xjzh3UM2A6CvhrSxcNL65QKpW2YQVebxhBbQo')
)

document.addEventListener('DOMContentLoaded', async () => {
const { data, error } = await supabase 
  .from('leaderboard')
  .select('username, score')
  .order('score', { ascending: false });

if (error) {
  console.log("failed:( : " + error.message)
  }
else {
  console.log("success:) I see thess users: ", data)
  }
  
const listDiv =  document.getElementById('list');
  if  (data && listDiv) { listDiv.innerHTML = data.map(user => `
<p><strong>${user.username}</strong>: ${user.score}s</p>`).join(''); 
  }
});
