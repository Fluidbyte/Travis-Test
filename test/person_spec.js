describe('Person', function(){
    it('should say the persons name', function(){
      var john = new person("John");
      expect(john.sayName()).to.equal('My name is John');
    });
});