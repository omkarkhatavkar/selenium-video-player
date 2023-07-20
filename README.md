# Selenium Test Browser Video Recording Viewer

This repository contains a web application that allows users to view recorded video sessions of Selenium test browser executions. The application is designed to work with Selenium test setups that record browser interactions during test executions and store them as video files.

## Key Features

- **Video Search:** Users can enter a session ID or test case identifier to search for specific recorded video sessions. The application will retrieve and display the corresponding video, if available.

- **Video Playback:** The web application includes a video player that supports playback of the recorded sessions. Users can control the video playback with standard controls like play, pause, seek, and volume adjustment.

- **Error Handling:** The application checks for the existence of the requested video session and provides appropriate error messages if the session is not found or if there are any playback issues.

- **Download Option:** Users have the option to download the recorded video session for offline viewing and archiving purposes.

- **Responsive Design:** The user interface is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

## How it Works

The application uses JavaScript to interact with the server to fetch video sessions based on the provided session ID. It utilizes XMLHttpRequest to check if the requested video exists on the server. If the video is found, it is loaded into the video player for playback. If not found, an error message is displayed to the user.

## Technologies Used

- HTML, CSS, JavaScript: Front-end development to create the user interface and handle user interactions.

- Selenium: Used in conjunction with the application under test to record browser interactions during test executions.

- Apache (HTTPD): The recorded video sessions are hosted and served using Apache (HTTPD) web server.

- Docker Compose: The application is designed to work with Docker Compose, which facilitates the setup and deployment of the web application and its dependencies. We are using the Docker Compose file from the [SeleniumHQ/docker-selenium repository](https://github.com/SeleniumHQ/docker-selenium/blob/trunk/docker-compose-v3-dynamic-grid.yml), which needs some modification.

## Getting Started

To set up the project locally and run the web application, follow these steps:

1. Clone this repository to your local machine.

2. Open the `index.html` file in your web browser to access the application.

3. Ensure you have Apache (HTTPD) installed and properly configured on your server. The recorded video sessions will be served from the directory specified in the Apache configuration.

4. Using Docker Compose:

   - Make sure you have Docker and Docker Compose installed on your machine.

   - Edit the `docker-compose.yml` file to adjust any necessary configurations from the [SeleniumHQ/docker-selenium repository](https://github.com/SeleniumHQ/docker-selenium/blob/trunk/docker-compose-v3-dynamic-grid.yml). 

   - Run the following command to start the application and associated services:

     ```
     docker-compose up -d
     ```

   - The recorded video sessions will be saved to the specified location within the Docker container, `/opt/selenium/assets`, which is mapped to the host machine's `/var/www/html/videos` directory.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

