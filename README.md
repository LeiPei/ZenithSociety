# ZenithSociety

### The Zenith Society is a family oriented non-for-profit organization that holds events during the week. The leader of the group, Mr. John Doe, wishes to have a website that displays the events from Monday to Sunday of the current week.

**_Task #1 – ASP.NET Core 1.0:_**
##### The latest incarnation of the .NET Framework is ASP.NET 1.0 Core. The advantages of this version are that it is cross-platform, fast, and flexible. You will need to convert your current assignment 1 to ASP.NET Core 1.0. The approach you use is entirely up to you. You can either migrate your current code or you can rebuild it from scratch, while reusing business logic. 

**_Task #2 – manage users & roles:_**
##### You will also build a UI in the MVC application that will enable the administrator to add/delete roles and add/remove users from a role. The Member role is of special interest because your code automatically adds any registered user to the Member role. Only users that belong to the Member role can see events for past and future weeks. Of course, the administrator can remove a user from the Member role.
##### Your code needs to ensure that account “a” is never deleted or removed from the Admin role. Otherwise, if this happens, then the admin functionality of your web app may be inaccessible. You should also ensure that the Admin role cannot be deleted.
##### Note that a user can belong to one or more roles.

**_Task #3 - Create Web API services for all data:_**
##### Add Web API controllers to serve activity, event, and account data as RESTful services. These services should enable registration and authentication of users. 

**_Task #4 - Angular-ize some parts of the application:_**
##### The page that displays the schedule by week will be served by an index.html page that is powered by AngularJS 2.0.  It utilizes the Web API service to obtain data. 
##### The current week schedule is visible to anonymous users. However, if a user is authenticated and belongs to either the Admin or Member roles, then he/she can click on button ‘<’ to see the schedule for a previous week or button ‘>’ to see the schedule for a future week.
