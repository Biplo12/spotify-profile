# Spotify Profile Summary Documentation

# Awaiting Spotify API Quota Approval
Please note that the Spotify Profile project is currently awaiting approval for API quota from Spotify. Until approval is granted, the project may have limited functionality when deployed to a live environment. As a result, the only way to test and use the application at the moment is to clone the project and run it locally on your machine.

## Introduction

Welcome to the documentation for **Spotify Profile**, a project heavily inspired by Brittany Chiang. This project provides users with a comprehensive summary of their Spotify profile, including user details, top artists, and top tracks. It is built using Next.js, Tailwind CSS, the Spotify Web API, and TypeScript.

## Features

### 1. Profile Summary

The profile summary provides users with an overview of their Spotify profile, including their user details, top artists, and top tracks.

- **User Details**: Users can view their Spotify username, profile picture, and other relevant information.
- **Top Artists**: This section displays the user's top artists, showcasing their musical preferences.
- **Top Tracks**: Users can see a list of their most listened-to tracks.

### 2. Artists Tab

In the Artists tab, users can explore their top artists in more detail. They can filter the artists by:

- **All Time**: View top artists based on their all-time listening history.
- **Last 6 Months**: See top artists from the last six months.
- **Last 4 Weeks**: Explore the top artists from the past four weeks.

Upon clicking on an artist, users are directed to a dedicated artist statistics page, where they can find more information about the selected artist.

### 3. Tracks Tab

The Tracks tab allows users to delve into their top tracks. Like the Artists tab, they can filter tracks by:

- **All Time**: Access top tracks from all-time listening history.
- **Last 6 Months**: See top tracks from the last six months.
- **Last 4 Weeks**: Explore top tracks from the past four weeks.

Clicking on a specific track will lead users to a detailed track statistics page, where they can learn more about the track.

### 4. Recent Tab

The Recent tab displays the most recent tracks that the user has listened to on Spotify. This gives users an insight into their current listening habits and preferences.

### 5. Playlist Tab

In the Playlist tab, users can access their Spotify playlists. Upon clicking on a specific playlist, they can view all the tracks contained within it. Additionally, users have the following options:

- **Get Recommendations**: Users can receive track recommendations based on the selected playlist.

## Technology Stack

The Spotify Profile project leverages the following technologies:

- **Next.js**: A React framework for building server-rendered React applications.
- **Tailwind CSS**: A utility-first CSS framework for designing user interfaces.
- **Spotify Web API**: The official API provided by Spotify for accessing user-specific music data.
- **TypeScript**: A statically typed superset of JavaScript, enhancing code quality and maintainability.

## Getting Started

To run the Spotify Profile project locally, follow these steps:

1. Clone the GitHub repository: [github.com/Biplo12/spotify-profile](https://github.com/Biplo12/spotify-profile.git).
2. Install the necessary dependencies using npm or yarn.
3. Configure your Spotify API credentials by creating a Spotify Developer App and adding the required credentials to the project.
4. Start the development server.

```bash
npm install
npm run dev
```

## Conclusion

Spotify Profile is an exciting project that allows users to explore their Spotify listening history in a visually appealing and informative way. Whether you want to discover your top artists, tracks, or playlists, this application provides a user-friendly experience for Spotify enthusiasts. Enjoy exploring your music profile!

For any questions or issues, please refer to the project's GitHub repository or contact the project maintainers.
