// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const API_KEY = 'AIzaSyCVOMj9rSMM8p015wZYMLwd0a28yre8fjw';

function getSubscriberCount() {
    const channelId = document.getElementById('channelIdInput').value;
    const subscriberCountElement = document.getElementById('subscriberCount');

    // Make a request to the YouTube Data API
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const subscriberCount = data.items[0].statistics.subscriberCount;
            subscriberCountElement.textContent = subscriberCount;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            subscriberCountElement.textContent = 'Error';
        });
}
