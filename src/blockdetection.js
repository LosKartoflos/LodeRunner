//x marks the point where something is detectet. '.' is for the space outside of the player and 'p' for the player. all p's are one full block.

        //.....
        //xppp.
        //.ppp.
        //.ppp.
        //.....
        function detectNextBlock_Left(x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x - 1) /w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
             //console.log("Entitity: " + map_comp[mapCoordY-1][mapCoordX-1].toString());
             //console.log("Entitity: " + map_comp[mapCoordY-1][mapCoordX-1].getOwnPropertyNames());
            return map[mapCoordY-1][mapCoordX-1];
           
        
        }
        //.....
        //.ppp.
        //.ppp.
        //xppp.
        //.....
        function   detectNextBlock_LeftDown (x,y,h,w)
        {
            var mapCoordY = (y + h -1 )/ h;
            var mapCoordX = (x - 1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
        }
        //.x...
        //.ppp.
        //.ppp.
        //.ppp.
        //.....
        function detectNextBlock_UpLeft (x,y,h,w)
        {
            var mapCoordY = (y - 1)/ h;
            var mapCoordX = (x ) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
           
        }
        //.....
        //.pppx
        //.ppp.
        //.ppp.
        //.....
        function detectNextBlock_Right (x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x + w) / w;
           
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
        }
        //...x.
        //.ppp.
        //.ppp.
        //.ppp.
        //.....
        function detectNextBlock_UpRight (x,y,h,w)
        {
            var mapCoordY = (y - 1)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
           
        }
        //.....
        //.ppp.
        //.ppp.
        //.pppx
        //.....
        function detectNextBlock_RightDown (x,y,h,w)
        {
            var mapCoordY = (y + h - 1)/ h;
            var mapCoordX = (x + w) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
        }
        //.....
        //.ppp.
        //.ppp.
        //.ppp.
        //.x...
        function detectNextBlock_DownLeft (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
           
            //Frage
            //var stoneBool =  (Crafty.e('Stone') == map_comp[mapCoordY-1][mapCoordX-1]);
            //console.log("Is Stone: " + stoneBool);
             return map[mapCoordY-1][mapCoordX-1];
        }
        //.....
        //.ppp.
        //.ppp.
        //.ppp.
        //x....
        function detectNextBlock_CornerDownLeft (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return map[mapCoordY-1][mapCoordX-1];
        }
        //.....
        //.ppp.
        //.ppp.
        //.ppp.
        //....x
        function detectNextBlock_CornerDownRight (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x + w) / w;
            
            
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return level1[mapCoordY-1][mapCoordX-1];
        }
        //.....
        //.ppp.
        //.ppp.
        //.ppp.
        //...x.
        function detectNextBlock_DownRight (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];      
        }
        //.....
        //.ppx.
        //.ppp.
        //.ppp.
        //.....
        function detectNextBlock_CurrentRightUp(x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }
        //.....
        //.xpp.
        //.ppp.
        //.ppp.
        //.....
        function detectNextBlock_CurrentLeftUp(x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }
        //.....
        //.ppp.
        //.ppp.
        //.ppx.
        //.....
        function detectNextBlock_CurrentRightDown(x,y,h,w)
        {
            var mapCoordY = (y + h -1)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }
        //.....
        //.ppp.
        //.ppp.
        //.xpp.
        //.....
        function detectNextBlock_CurrentLeftDown(x,y,h,w)
        {
            var mapCoordY = (y + h -1)/ h;
            var mapCoordX = (x) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }
        
        //.....
        //.ppp.
        //.ppp.
        //.ppp.
        //....x.
        
        function coord_CornerDownRight (x,y,h,w)
        {
            var mapCoord = {};
            
            mapCoord[0] = (x + w) / w;
            mapCoord[1] = (y + h)/ h;
            
            mapCoord[0] = Math.floor(mapCoord[0]-1);
            mapCoord[1] = Math.floor(mapCoord[1]-1);
            
            return mapCoord;
        }
        
        //.....
        //.ppp.
        //.ppp.
        //.ppp.
        //.x...
        
        function coord_DownLeft (x,y,h,w)
        {
            var mapCoord = {};
            
            mapCoord[0] = (x) / w;
            mapCoord[1] = (y + h)/ h;
            
            mapCoord[0] = Math.floor(mapCoord[0]-1);
            mapCoord[1] = Math.floor(mapCoord[1]-1);
            
            return mapCoord;
        }
        
        
        //.....
        //.ppp.
        //.ppp.
        //.ppp.
        //...x.
        
         function coord_DownRight (x,y,h,w)
        {
            var mapCoord = {};
            
            mapCoord[0] = (x + w -1) / w;
            mapCoord[1] = (y + h)/ h;
            
            mapCoord[0] = Math.floor(mapCoord[0]-1);
            mapCoord[1] = Math.floor(mapCoord[1]-1);
            
            return mapCoord;      
        }
        
        //.....
        //.ppp.
        //.ppp.
        //.xpp.
        //.....
        
        function coord_CurrentLeftDown (x,y,h,w)
        {
            var mapCoord = {};
            
             mapCoord[1] = (y + h -1)/ h;
             mapCoord[0] = (x) / w;
            
            mapCoord[0] = Math.floor(mapCoord[0]-1);
            mapCoord[1] = Math.floor(mapCoord[1]-1);
            
            return mapCoord;
        }
        
        //.....
        //.ppp.
        //.ppp.
        //.ppx.
        //.....
        
         function coord_CurrentRightDown (x,y,h,w)
        {
            var mapCoord = {};
            
             mapCoord[1] = (y + h -1)/ h;
             mapCoord[0] = (x + w -1) / w;
            
            mapCoord[0] = Math.floor(mapCoord[0]-1);
            mapCoord[1] = Math.floor(mapCoord[1]-1);
            
            return mapCoord;      
        }
        
        //.....
        //.xpp.
        //.ppp.
        //.ppp.
        //.....
        
        function coord_CurrentLeft (x,y,h,w)
        {
            var mapCoord = {};
            
             mapCoord[1]= (y)/ h;
             mapCoord[0] = (x) / w;
            
            mapCoord[0] = Math.floor(mapCoord[0]-1);
            mapCoord[1] = Math.floor(mapCoord[1]-1);
            
            return mapCoord;
        }
        
        //.....
        //.ppx.
        //.ppp.
        //.ppp.
        //.....
        
         function coord_CurrentRight (x,y,h,w)
        {
            var mapCoord = {};
            
             mapCoord[1] = (y)/ h;
             mapCoord[0] = (x + w -1) / w;
            
            mapCoord[0] = Math.floor(mapCoord[0]-1);
            mapCoord[1] = Math.floor(mapCoord[1]-1);
            
            return mapCoord;      
        }