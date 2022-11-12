let today = new Date().toDateString();
let user = {
  name: 'SudoCoder',
  email: 'SudoCoder@email.com',
  displayInfo: function(tragetID) {
    let userInfo = `${this.name} - ${this.email}`;
    document.getElementById(tragetID).textContent = userInfo;
  }
}

// Header
user.displayInfo('user-info')
showMessage('today-date', today);

// Main
showMessage('message',`Lets get to work ${user.name}!`)

const goals = ['HTML/CSS', 'Javascript', 'Object-Oriented Programming']
listItems('goals', goals);

const tasks = ['Tasks #1', 'Tasks #2', 'Tasks #3', 'Tasks #4']
listItems('tasks', tasks)
