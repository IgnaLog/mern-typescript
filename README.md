# MERN Stack TypeScript - Uploading Videos to a Website

This is a web application with backend and frontend developed with the MERN Stack and TypeScript for video management. This app allows users to upload videos with title, description and URL and can also view the videos uploaded by other users. Also, users can update or delete videos that they have previously uploaded.

This application is styled with the use of Bootstrap and Bootswatch.

![](https://i.ibb.co/McYTh1j/mern-ts-video-management-home.png)
![](https://i.ibb.co/bQKdTrC/mern-ts-video-management-edit.png)

## 💻 Quick start

### Backend - Server Directory

To deploy this project, you must first install the node_modules packages. To do this, open a console with the root path of the server directory and run:

```bash
npm install
```

After that, make sure you have mongodb installed locally or in the cloud. Then, create an `.env` file in the main directory of the project with the following environment variables:

    PORT=<3000>
    MONGODB_DATABASE_NAME=<tsmern>
    MONGODB_HOST=<127.0.0.1>
    MONGODB_USER=<admin>
    MONGODB_PASSWORD=<admin>

Finally, in the terminal with the main path execute:

```bash
npm run dev
```

### Frontend - Client Directory

As in the backend you need to load the node_modules from the client folder through the `npm install` command, finally run also `npm run dev` to launch the client application.
