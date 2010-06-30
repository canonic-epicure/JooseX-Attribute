//Role('JooseX.Attribute.Delegated', {
//    
////    have : {
////        trigger        : null
////    }, 
////
////    
////    before : {
////        computeValue : function() {
////            if (this.trigger) this.is = 'rw'
////        }
////    },
////    
////    
////    after : {
////        
////        computeValue : function() {
////            if (this.trigger) {
////                var after = {}    
////                
////                after[this.setterName] = this.trigger    
////                
////                this.role.meta.extend({ after : after })
////            }
////        }
////        
////    }
//    
//})