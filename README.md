# Ticketing App

A platform where users can buy tickets for concerts, events, and other activities, and resell their tickets for a higher price. The app allows event organizers, companies, and individuals to list tickets, purchase them, and transfer them to others, creating a dynamic ticket marketplace.

## Features

* **Buy Tickets**: Users can browse and buy tickets for various events and concerts.
* **Sell Tickets**: Individuals or companies can resell their tickets at higher prices.
* **Ticket Management**: Users can view their purchased and listed tickets.
* **Event Listings**: Event organizers can list new events and their corresponding tickets.
* **Dynamic Pricing**: The platform allows dynamic pricing for reselling tickets.

## Project Structure

The project is divided into multiple services, each responsible for a specific part of the application:

* **Client Service**: Handles the front-end user interface where users can interact with the app.
* **Order Service**: Manages ticket purchases and transactions.
* **Tickets Service**: Manages ticket listings, including purchasing and reselling tickets.
* **Common Service**: Includes shared logic and utilities used across the application.
* **Infra Setup**: Contains Kubernetes and infrastructure setup to deploy the app.
* **NAT Service**: A service for handling NAT-related functionalities, possibly for networking or event-specific tasks.

## Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn
* Docker (optional, for containerized development)
* Kubernetes (optional, for deploying the app in production)

### Installation

* Clone the repository:

* git clone https://github.com/itsmesohit/ticketApp.git

* cd ticketApp

* Install dependencies for each service (if using separate services):

* cd client
* npm install
* cd ../orders
* npm install
* cd ../tickets
* npm install

To run the app locally, use Docker (optional but recommended):

* docker-compose up

* If you are not using Docker, you can run the services separately with:

* npm start

* cd client
* npm start

* cd orders
* npm start

* tickets
* npm start

##  Deployment
* For production deployments, you can use Kubernetes, as specified in the infra/k8s folder. You can set up the app using Helm charts or custom Kubernetes manifests.
* cd infra/k8s
* kubectl apply -f .

## Tech Stack

* Backend: Node.js, Express, and TypeScript
* Frontend: React.js and TypeScript
* Database: PostgreSQL (or any other database of your choice)
* Infrastructure: Docker, Kubernetes, Helm
* Other: GitHub Actions for CI/CD, Jest for testing


## License
* This project is licensed under the MIT License.
