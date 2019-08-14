!function(){
  var model = {
    init: function(){
      var { Query, User } = AV;
      AV.init({
        appId: "gYXfJgdeAToQaGzun95gy3TH-MdYXbMMI",
        appKey: "Funsd7Ed41ubwUDOk9a3lsf8",
      });
    },
    //获取数据
    fetch: function(){
      var query = new AV.Query('Message');
      return query.find() //Promise 对象
    },
    //创建数据
    save: function(){
      var Message = AV.Object.extend('Message');
      var message = new Message();
      var name = messageForm.querySelector('input[name=name]').value
      var content = messageForm.querySelector('input[name=content]').value
      message.set('name', name);
      message.set('content', content);
      return message.save() //Promise 对象
    }
  }
  var view = document.querySelector('section.message')
  var controller = {
    model: null,
    view: null,
    messageBoard: null,
    messageForm: null,
    init: function(){
      this.model = model
      this.view = view
      this.messageBoard = view.querySelector('#messageBoard')
      this.messageForm = view.querySelector('#messageForm')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },

    loadMessages: function () {
      var query = new AV.Query('Message');
      this.model.fetch().then((message) => {
        for (var key in message) {
          var value = message[key]
          let li = document.createElement('li')
          this.messageBoard.append(li)
          li.textContent = `${value.attributes.name}: ${value.attributes.content}`
        }
      });
    },
    bindEvents: function () {
      this.messageForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this.postMessages()
      })
    },
    postMessages: function(){
      this.model.save().then(
        (message) => {
          let li = document.createElement('li')
          this.messageBoard.append(li)
          li.textContent = `${message.attributes.name}: ${message.attributes.content}`
        })
    } 
  }
  controller.init(view, model)
}.call()






