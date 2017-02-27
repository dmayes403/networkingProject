angular.module('networkingApp')
    .service('userServ', function($http){
      var userData = [
        {
          id: 1,
          firstName: 'David',
          lastName: 'Mayes',
          headShot: 'http://davidmayesphoto.com/wp-content/uploads/2016/08/DRM_8813-1067x712.jpg',
          age: 27,
          gender: 'Male',
          city: 'Lehi',
          state: 'Utah',
          username: 'david',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ]
        },
        {
          id: 2,
          firstName: 'Bri',
          lastName: 'Mayes',
          headShot: 'http://davidmayesphoto.com/wp-content/uploads/2016/08/DRM_8740-1067x712.jpg',
          age: 25,
          gender: 'Female',
          city: 'Lehi',
          state: 'Utah',
          username: 'bri',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ]
        }
      ];

      this.getUserData = function(){
        return userData;
      };

      // this.getUser = function(id){
      //   return userData.find(user => user.id === +id);
      // };

      this.getUser = function(id){
        return JSON.parse(localStorage.getItem(1)).find(user => user.id === +id);
      };

      // login function /////////////////

      this.checkCredentials = function(user, pass){
        for(var i = 0;i < userData.length; i++){
          if(userData[i].username === user && userData[i].password === pass){
            return userData[i].id;
          } else {
            console.log('no match');
          }
        }
      };

      // add a comment function ///////////

      this.addComment = function(id, comment){
        var currentUserData = JSON.parse(localStorage.getItem(1));
        console.log(currentUserData);
        for(var i = 0; i < currentUserData.length; i++){
          if(currentUserData[i].id === id){
            currentUserData[i].comments.unshift(comment);
            localStorage.setItem(1, JSON.stringify(currentUserData));
          }
        }
        return currentUserData;
      }

      // new user constructor  & function ////////////

      var newId = 3;

      var newUser = function(firstName, lastName, age, gender, city, state, username, password){
        this.id = newId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.state = state;
        this.username = username;
        this.password = password;
        this.comments = [];
      };

      this.createUser = function(firstName, lastName, age, gender, city, state, username, password){
        if(firstName && lastName && age && gender && city && state && username && password){
          var currentUserData = JSON.parse(localStorage.getItem(1));
          console.log(currentUserData);
          currentUserData.unshift(new newUser(firstName, lastName, age, gender, city, state, username, password));
          newId++;
          localStorage.setItem(1, JSON.stringify(currentUserData));
          console.log(currentUserData);
          return currentUserData;
        } else {
          console.log('theres still blanks!');
        }
      }


    });
