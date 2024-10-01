let rameshVotes = 0;

let kevalchandVotes = 0;

let totalVotes = 0;

// Function to check if user has already voted

function hasUserVoted() {

    return localStorage.getItem('hasVoted');

}

// Function to record user's vote and prevent future voting

function vote(candidate) {

    if (hasUserVoted()) {

        alert("आप पहले ही वोट कर चुके हैं।");

        return;

    }

    totalVotes++;

    if (candidate === 'ramesh') {

        rameshVotes++;

        document.getElementById('light1').style.backgroundColor = 'green';

    } else if (candidate === 'kevalchand') {

        kevalchandVotes++;

        document.getElementById('light2').style.backgroundColor = 'green';

    }

    // Calculate percentages

    const rameshPercent = ((rameshVotes / totalVotes) * 100).toFixed(2);

    const kevalchandPercent = ((kevalchandVotes / totalVotes) * 100).toFixed(2);

    // Update UI with percentages

    document.getElementById('rameshPercent').innerText = rameshPercent;

    document.getElementById('kevalchandPercent').innerText = kevalchandPercent;

    // Record that the user has voted

    localStorage.setItem('hasVoted', true);

}