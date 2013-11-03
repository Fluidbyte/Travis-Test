describe('Place', function(){
    it('should say where you would like to visit', function(){
      var hawaii = new place("Hawaii");
      expect(hawaii.sayWhere()).to.equal('I would like to visit Hawaii');
    });
});