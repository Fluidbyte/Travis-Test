describe('Thing', function(){
    it('should say what the thing is', function(){
      var car = new thing("Car");
      expect(car.sayWhat()).to.equal('This is a Car');
    });
});