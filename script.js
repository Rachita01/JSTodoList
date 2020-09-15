          var todoList =
          {
            todos:[],
              displayTodos:function(){
                if(this.todos.length === 0){
                    console.log("No todos to show!!Please add one!!");
                }
                else
                {
                console.log('My Todos:');
                for(var i = 0;i<this.todos.length;i++){
                    console.log('()',this.todos[i].todoText);
                }
                } 
              },
              displayCompleted:function(){
                console.log('Completed Todos:');
                for(var i = 0;i<this.todos.length;i++){
                    if(this.todos[i].completed === true)
                    console.log('(X)',this.todos[i].todoText);
                    else
                    console.log('()',this.todos[i].todoText);
                }
              },
            addTodos:function(todoText){
                 this.todos.push({
                     todoText:todoText,
                     completed:false
                 });
                 this.displayTodos();
            },
              changeTodos:function(position,todoText){
                  this.todos[position].todoText=todoText;
                  this.displayTodos();
              },
              deleteTodos:function(position){
                  this.todos.splice(position,1).todoText;
                  this.displayTodos();
              },
              toggleCompleted:function(position){
                  var todo = this.todos[position];
                  todo.completed = !todo.completed;
                  this.displayCompleted();
              },
              toggleAll:function(){
                  var totalTodos = this.todos.length;
                  var completedTodos = 0;
                  for(i=0;i<totalTodos;i++){
                      if(this.todos[i].completed===true){
                          completedTodos++;
                      }
                  }

                  if(completedTodos===totalTodos){
                      for(i=0;i<totalTodos;i++){
                          this.todos[i].completed=false;
                      }
                  }
                  else{
                      for(i=0;i<totalTodos;i++){
                          this.todos[i].completed=true;
                      }
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
            },
            addTodo:function(){
                var todoTextInput = document.getElementById("todoTextInput");
                todoList.addTodos(todoTextInput.value);
                todoTextInput.value='';
            },
            changeTodo:function(){
                var changeTodoPosition = document.getElementById("changeTodoPosition");
                var changeTodoText = document.getElementById("changeTodoText");
                todoList.changeTodos(changeTodoPosition.valueAsNumber,changeTodoText.value);
                changeTodoPosition.valueAsNumber='';
                changeTodoText.value='';
            },
            deleteTodo:function(){
                var deleteTodoPosition = document.getElementById("deleteTodoPosition");
                todoList.deleteTodos(deleteTodoPosition.valueAsNumber);
                deleteTodoPosition.value='';
            },
            toggleTodo:function(){
                var toggleTodoPosition = document.getElementById("toggleTodoPosition");
                todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
                toggleTodoPosition.value='';
            }
        }

          