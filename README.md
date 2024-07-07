This is the client side of the website. <br />
Backend github link: https://github.com/Sifat-Ikram/tasks-maser-server
<ul>
  <li>
    Website Name: Task Master
  </li>
  <li>
    Live link: https://task-master-96.web.app/
  </li>
</ul>

This is a task management website. An user can sign up and can see what task he has been given. User can move the task from to do list to in progress list and to completed list. An admin can add and delete a task. Admin can also assign an user a task. Admin can see the user list and can make an user admin.

Admin Panel: <br>
Email: taskmaster@gmail.com<br>
Password: task123<br>

Features:
<ol>
  <li>This is a task management website.</li>
  <li>An user can see the tasks in the home page.</li>
  <li>After signing in or signing up, user can see his to do list in the dashboard page</li>
  <li>An user can move his task to in-progress list by clicking the arrow sign in the to-do list and can move the task to completed tasks list by clicking arrow sign in in-progress list.</li>
  <li>Admin can see the user list and make anyone admin</li>
  <li>An admin can assign an user a task. Also can delete a task</li>
  <li>Admin can also add task in the Add Task page.</li>
</ol>

Steps to run this code locally,
To run this app locally, Firstly, for frontend, frontend github repository link should be cloned through command prompt. As I have deployed the backend in vercel, so there will be no problem from the backend side. Next, necessary dependencies must be installed. Now a .env.local file should be created and with the information given below, .env.local file must be filled. <br />
Frontend .env.local file information: <br />
<ul>
  <li>VITE_apiKey=AIzaSyByZvhHxkh_h_fMQY1FB2AmUkt1jcAgQ04</li>
  <li>VITE_authDomain=task-master-96.firebaseapp.com</li>
  <li>VITE_projectId=task-master-96</li>
  <li>VITE_storageBucket=task-master-96.appspot.com</li>
  <li>VITE_messagingSenderId=1054568211436</li>
  <li>VITE_appId=1:1054568211436:web:34ca145411ac78758d56c9</li>
</ul>

After completing theses steps, If we run command "npm run dev", the website will be running on localhost.
