��( f u n c t i o n ( $ ) {  
 	 $ . f n . s n o w   =   f u n c t i o n ( o p t i o n s ) {  
 	 v a r   $ f l a k e   =   $ ( ' ' ) . c s s ( { ' p o s i t i o n ' :   ' a b s o l u t e ' , ' z - i n d e x ' : ' 9 9 9 9 ' ,   ' t o p ' :   ' - 5 0 p x ' } ) . h t m l ( ' D'' ) ,  
 	 d o c u m e n t H e i g h t   	 =   $ ( d o c u m e n t ) . h e i g h t ( ) ,  
 	 d o c u m e n t W i d t h 	 =   $ ( d o c u m e n t ) . w i d t h ( ) ,  
 	 d e f a u l t s   =   {  
 	 	 m i n S i z e 	 	 :   1 0 ,  
 	 	 m a x S i z e 	 	 :   2 0 ,  
 	 	 n e w O n 	 	 :   1 0 0 0 ,  
 	 	 f l a k e C o l o r 	 :   " # A F D A E F "   / *   dkY�S�N�[INꖱ���r��傁�}vr��S�N9e:N# F F F F F F   * /  
 	 } ,  
 	 o p t i o n s 	 =   $ . e x t e n d ( { } ,   d e f a u l t s ,   o p t i o n s ) ;  
 	 v a r   i n t e r v a l =   s e t I n t e r v a l (   f u n c t i o n ( ) {  
 	 v a r   s t a r t P o s i t i o n L e f t   =   M a t h . r a n d o m ( )   *   d o c u m e n t W i d t h   -   1 0 0 ,  
 	 s t a r t O p a c i t y   =   0 . 5   +   M a t h . r a n d o m ( ) ,  
 	 s i z e F l a k e   =   o p t i o n s . m i n S i z e   +   M a t h . r a n d o m ( )   *   o p t i o n s . m a x S i z e ,  
 	 e n d P o s i t i o n T o p   =   d o c u m e n t H e i g h t   -   2 0 0 ,  
 	 e n d P o s i t i o n L e f t   =   s t a r t P o s i t i o n L e f t   -   5 0 0   +   M a t h . r a n d o m ( )   *   5 0 0 ,  
 	 d u r a t i o n F a l l   =   d o c u m e n t H e i g h t   *   1 0   +   M a t h . r a n d o m ( )   *   5 0 0 0 ;  
 	 $ f l a k e . c l o n e ( ) . a p p e n d T o ( ' b o d y ' ) . c s s ( {  
 	 	 l e f t :   s t a r t P o s i t i o n L e f t ,  
 	 	 o p a c i t y :   s t a r t O p a c i t y ,  
 	 	 ' f o n t - s i z e ' :   s i z e F l a k e ,  
 	 	 c o l o r :   o p t i o n s . f l a k e C o l o r  
 	 } ) . a n i m a t e ( {  
 	 	 t o p :   e n d P o s i t i o n T o p ,  
 	 	 l e f t :   e n d P o s i t i o n L e f t ,  
 	 	 o p a c i t y :   0 . 2  
 	 } , d u r a t i o n F a l l , ' l i n e a r ' , f u n c t i o n ( ) {  
 	 	 $ ( t h i s ) . r e m o v e ( )  
 	 } ) ;  
 	 } ,   o p t i o n s . n e w O n ) ;  
         } ;  
 } ) ( j Q u e r y ) ;  
 $ ( f u n c t i o n ( ) {  
         $ . f n . s n o w ( {    
 	         m i n S i z e :   5 ,   / *   �[INꖱ� g\:\�[  * /  
 	         m a x S i z e :   5 0 , / *   �[INꖱ� g'Y:\�[  * /  
 	         n e w O n :   3 0 0     / *   �[IN�[Ɩz�^�peW[��\���[Ɩ  * /  
         } ) ;  
 } ) ;  
 