Role('JooseX.Attribute.Delegated', {
    
    have : {
        handles : null
    },
    
    
    override : {
        
        getAccessorsFor : function (targetClass) {
            var methods = this.SUPER(targetClass)
            
            // add delegation methods to `methods`
            
            return methods
        },
        
        
        getAccessorsFrom : function (from) {
            var methods = this.SUPER(from)
            
            // add delegation methods to `methods`
            
            return methods
        }
        
    }
    
    
})