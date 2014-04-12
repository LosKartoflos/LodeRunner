//Detects the upcoming block in -x direction 
        function detectNextBlock_Left(x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x - 1) /w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
        }
        function   detectNextBlock_LeftDown (x,y,h,w)
        {
            var mapCoordY = (y + h -1 )/ h;
            var mapCoordX = (x - 1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
        }
        //Detects the upcoming block -y direction
        function detectNextBlock_UpLeft (x,y,h,w)
        {
            var mapCoordY = (y - 1)/ h;
            var mapCoordX = (x ) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
           
        }
        
        //Detects the upcoming block +x direction
        function detectNextBlock_Right (x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x + w) / w;
           
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
        }
        
        function detectNextBlock_UpRight (x,y,h,w)
        {
            var mapCoordY = (y - 1)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
           
        }
        
        function detectNextBlock_RightDown (x,y,h,w)
        {
            var mapCoordY = (y + h - 1)/ h;
            var mapCoordX = (x + w) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];
        }
        //Detects the upcoming block und +y direction
        function detectNextBlock_DownLeft (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return map[mapCoordY-1][mapCoordX-1];
        }
        function detectNextBlock_CornerDownLeft (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return map[mapCoordY-1][mapCoordX-1];
        }
        function detectNextBlock_CornerDownRight (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x + w) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return level1[mapCoordY-1][mapCoordX-1];
        }
        function detectNextBlock_DownRight (x,y,h,w)
        {
            var mapCoordY = (y + h)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];      
        }
        function detectNextBlock_CurrentRightUp(x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }
        function detectNextBlock_CurrentLeftUp(x,y,h,w)
        {
            var mapCoordY = (y)/ h;
            var mapCoordX = (x) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }
        function detectNextBlock_CurrentRightDown(x,y,h,w)
        {
            var mapCoordY = (y + h -1)/ h;
            var mapCoordX = (x + w -1) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }
        function detectNextBlock_CurrentLeftDown(x,y,h,w)
        {
            var mapCoordY = (y + h -1)/ h;
            var mapCoordX = (x) / w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return map[mapCoordY-1][mapCoordX-1];  
        }