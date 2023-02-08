# Treetop Component Picker Demo App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## App Solution Structure

App was developed and structured in three main components:

- Component list (overview)
- Component picker (adding new components to component list)
- Component detail view (displaing detail view for both component list and component picker)

Shared services that components use are placed in folder `ng e2e` services and contain:

- Data services (contain shared data of all components and added components)
- Shared services (methods for toggling the component picker component and closing the detail view component)

## Utilized Principles

App could have been developed in just one component and with more simplified structure but to be able to demonstrate following principles it is structured in this way.

Principles utilized:

- Shared services
- Observables and subscriptions
- Angular router
- Shared data

## Mockups created before app was developed

![1](https://user-images.githubusercontent.com/16374433/217610382-dcd7b838-5e22-4138-9111-638a472adb7b.png)
![2](https://user-images.githubusercontent.com/16374433/217610399-e69aac38-4aa3-44bf-a66b-5306415eee4a.png)
![3](https://user-images.githubusercontent.com/16374433/217610406-07b23c4c-94fe-45dd-bbba-762534916e05.png)

