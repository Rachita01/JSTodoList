          var todoList =
          {
            todos:[],
            //   displayTodos:function(){
            //     if(this.todos.length === 0){
            //         console.log("No todos to show!!Please add one!!");
            //     }
            //     else
            //     {
            //     console.log('My Todos:');
            //     for(var i = 0;i<this.todos.length;i++){
            //         console.log('()',this.todos[i].todoText);
            //     }
            //     } 
            //   },
            //   displayCompleted:function(){
            //     console.log('Completed Todos:');
            //     for(var i = 0;i<this.todos.length;i++){
            //         if(this.todos[i].completed === true)
            //         console.log('(X)',this.todos[i].todoText);
            //         else
            //         console.log('()',this.todos[i].todoText);
            //     }
            //   },
            addTodos:function(todoText){
                 this.todos.push({
                     todoText:todoText,
                     completed:false
                 });
                //  this.displayTodos();
            },
              changeTodos:function(position,todoText){
                  this.todos[position].todoText=todoText;
                //   this.displayTodos();
              },
              deleteTodos:function(position){
                  this.todos.splice(position,1).todoText;
                //   this.displayTodos();
              },
              toggleCompleted:function(position){
                  var todo = this.todos[position];
                  todo.completed = !todo.completed;
                //   this.displayCompleted();
              },
              toggleAll:function(){
                  var totalTodos = this.todos.length;
                  var completedTodos = 0;
                //   for(i=0;i<totalTodos;i++){
                //       if(this.todos[i].completed===true){
                //           completedTodos++;
                //       }
                //   }
                //Change above for loop to forEach
                this.todos.forEach(function(todo){
                    if(todo.completed===true){
                       completedTodos++;
                    }
                })

                  if(completedTodos===totalTodos){
                    //   for(i=0;i<totalTodos;i++){
                    //       this.todos[i].completed=false;
                    //   }
                    //Change above for loop to forEach
                    this.todos.forEach(function(todo){
                        todo.completed=false;
                    })
                  }
                  else{
                    //   for(i=0;i<totalTodos;i++){
                    //       this.todos[i].completed=true;
                    //   }
                       //Change above for loop to forEach
                    this.todos.forEach(function(todo){
                        todo.completed=true;
                    })
                  }
              }
          };
        //   document.addEventListener("DOMContentLoaded",function() {
        //     var displayTodosButton = document.getElementById("displayTodosButton");
        //     console.log(displayTodosButton);
        //     displayTodosButton.addEventListener("click",function(){
        //         todoList.displayTodos();
        //     })
        //   })
        //   document.addEventListener("DOMContentLoaded",function() {
        //     var toggleAllTodos = document.getElementById("toggleAllTodos");
        //     console.log(toggleAllTodos);
        //     toggleAllTodos.addEventListener("click",function(){
        //         todoList.toggleAll();
        //     })
        //   })
        //Alternative to above code is below
        var handlers = {
            displayTodos:function(){
                todoList.displayTodos();
            },
            toggleAll:function(){
                todoList.toggleAll();
                view.displayTodos();
            },
            addTodo:function(){
                var todoTextInput = document.getElementById("todoTextInput");
                todoList.addTodos(todoTextInput.value);
                todoTextInput.value='';
                view.displayTodos();
            },
            changeTodo:function(){
                var changeTodoPosition = document.getElementById("changeTodoPosition");
                var changeTodoText = document.getElementById("changeTodoText");
                todoList.changeTodos(changeTodoPosition.valueAsNumber,changeTodoText.value);
                changeTodoPosition.value='';
                changeTodoText.value='';
                view.displayTodos();
            },
            // deleteTodo:function(){
            //     // var deleteTodoPosition = document.getElementById("deleteTodoPosition");
            //     // todoList.deleteTodos(deleteTodoPosition.valueAsNumber);
            //     // deleteTodoPosition.value='';
            //     // view.displayTodos();
            // },
            deleteTodo:function(position){
                todoList.deleteTodos(position);
                view.displayTodos();
            },
            toggleTodo:function(){
                var toggleTodoPosition = document.getElementById("toggleTodoPosition");
                todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
                toggleTodoPosition.value='';
                view.displayTodos();
            }
        };

        var view = {
            displayTodos:function(){
                var todosUl = document.querySelector('ul');
                todosUl.innerHTML='';
            //     for(var i=0;i<todoList.todos.length;i++){
            //     var todosLi = document.createElement('li');
            //     var todo = todoList.todos[i];
            //     var todosWithCompletion= '';
            //     if(todo.completed===true){
            //         todosWithCompletion='(X)'+todo.todoText;
            //     }
            //     else{
            //     todosWithCompletion = '( )'+todo.todoText;
            //     }
            //     todosLi.id = i;
            //     todosLi.textContent = todosWithCompletion;
            //     todosUl.appendChild(todosLi).appendChild(this.createDeleteButton());
            // }
            //Change above for loop to forEach
            todoList.todos.forEach(function(todo,position){
                var todosLi = document.createElement('li');
                var todosWithCompletion= '';
                if(todo.completed===true){
                    todosWithCompletion='(X)'+todo.todoText;
                }
                else{
                todosWithCompletion = '( )'+todo.todoText;
                }
                todosLi.id = position;
                todosLi.textContent = todosWithCompletion;
                todosUl.appendChild(todosLi).appendChild(this.createDeleteButton());
            },this)
            },
            createDeleteButton:function(){
                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'deleteButton';
                return deleteButton;
            },
            setUpEventListeners:function(){
                var deleteInfo = document.querySelector('ul');
         deleteInfo.addEventListener('click',function(event){
             console.log(event.target.parentNode.id);
             //Get the element that was clicked
             var elementClicked = event.target;
             //Check if element clicked is delete button
             if(elementClicked.className="deleteButton")
             {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
             }
         })
            }
        };

        view.setUpEventListeners();