StartTest(function(t) {
    
    t.plan(4)
    
    //==================================================================================================================================================================================
    t.diag("Sanity")    
    
    t.ok(JooseX.Attribute.Trigger, "JooseX.Attribute.Trigger is here")
    
    
    //==================================================================================================================================================================================
    t.diag("Trigger testing")
    
    Class('TestClass', {
        has : {
            res : {
                is : 'rw',
                init : 'advanced'
            },
            
            trigger : {
                init : 'foo',
                
                trigger : function (value) {
                    t.ok(value == 'bar', 'Trigger received new attribute value')
                    
                    this.setRes('triggered') 
                } 
            }
        }
    })    
    
    var testClass = new TestClass({
        trigger : 'bar'
    })    
    
    t.ok(testClass.trigger == 'bar', "Value of 'trigger' attribute is correct")    
    t.ok(testClass.res == 'triggered', ".. and the trigger function was executed")    
    
})    