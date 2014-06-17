/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function ki(moveDirection, x, y, h, w, plX, plY)
        {
          if (moveDirection == 4 && 
                (
                    (detectNextBlock_CurrentLeftUp(x,y,h,w) == '-' || detectNextBlock_CurrentRightUp(x,y,h,w) == '-') || 
                    (detectNextBlock_CurrentLeftUp(x,y,h,w) == 'H' ||detectNextBlock_CurrentRightUp(x,y,h,w) == 'H')
                ) &&
                (
                    (detectNextBlock_CurrentLeftDown(x,y,h,w) == '.' || detectNextBlock_CurrentRightDown(x,y,h,w) == '.') || 
                    (detectNextBlock_CurrentLeftDown(x,y,h,w) == '-' || detectNextBlock_CurrentRightDown(x,y,h,w) == '-')
                ) 
             )
          {
              moveDirection = 4;
              
          }
          else if (moveDirection == 1 && 
                (
                    (
                        //( detectNextBlock_CurrentLeftUp() == '.' &&  detectNextBlock_CurrentRightUp() == '-') || 
                        (detectNextBlock_CurrentLeftUp(x,y,h,w) == '.' && detectNextBlock_CurrentRightUp(x,y,h,w) == 'H')
                    ) &&
                    (
                        (detectNextBlock_DownLeft(x,y,h,w) == '.' || detectNextBlock_DownRight(x,y,h,w) == '.' )
                        
                    )
                ) 
             )
          {
              moveDirection = 1;
          }
          else if (moveDirection == 3 && 
                (
                    (
                        //( detectNextBlock_CurrentLeftUp() == '-' &&  detectNextBlock_CurrentRightUp() == '.') || 
                        (detectNextBlock_CurrentLeftUp(x,y,h,w) == 'H' && detectNextBlock_CurrentRightUp(x,y,h,w) == '.')
                    ) &&
                    (
                        (detectNextBlock_DownLeft(x,y,h,w) == '.' || detectNextBlock_DownRight(x,y,h,w) == '.' )
                        
                    )
                ) 
             )
          {
              moveDirection = 3;
          }
          
          else //wirklicher Ki Teil
          {
              if (plY < y && ((detectNextBlock_CurrentRightUp(x,y,h,w) == 'H' || detectNextBlock_CurrentLeftUp(x,y,h,w) == 'H') ||
                      ((detectNextBlock_CurrentRightUp(x,y,h,w) != 'W' || detectNextBlock_CurrentLeftUp(x,y,h,w) != 'W') &&
                      (detectNextBlock_CurrentRightDown(x,y,h,w) == 'H' || detectNextBlock_CurrentLeftDown(x,y,h,w) == 'H'))
                      ))
              {
                  moveDirection = 2;
              }
              else if (plY > y && ((detectNextBlock_DownRight(x,y,h,w) == 'H' || detectNextBlock_DownRight(x,y,h,w) == 'H') || 
                                            ((detectNextBlock_CurrentRightUp(x,y,h,w) == '-' || detectNextBlock_CurrentLeftUp(x,y,h,w) == '-') &&
                                            (detectNextBlock_DownRight(x,y,h,w) == '.' || detectNextBlock_DownRight(x,y,h,w) == '.') &&
                                            ((plX-15) <=  x && (plX-15) >=  x)
                                            )
                                           )
                       )
              {
                  moveDirection = 4;
              }
              else if ((moveDirection == 1 || moveDirection == 3) && (plY !=  y))
              {
                  //bleibt moveDirection die Gleich
                  if( x == 24)
                      moveDirection = 3;
                  else if( x == 768)
                      moveDirection = 1;
              }
              else if(plX < x)//links
              {
                  if(detectNextBlock_CornerDownLeft(x,y,h,w) == '.' && (detectNextBlock_DownLeft(x,y,h,w) == 'H'))
                    moveDirection = 3;
                  /*else if( detectNextBlock_Left() == 'W' &&  detectNextBlock_CurrentLeftUp() == 'H' && (playerX%4) == 0)
                     moveDirection = 2;*/
                  else if(detectNextBlock_Left(x,y,h,w) == 'W')
                    moveDirection = 3;
                  else
                    moveDirection = 1;
              }
              else if(plX > x)// rechts
              {
                  if(detectNextBlock_CornerDownRight(x,y,h,w) == '.' && (detectNextBlock_DownRight(x,y,h,w) == 'H'))
                    moveDirection = 1;
                  /*else if( detectNextBlock_Right() == 'W' &&  detectNextBlock_CurrentLeftUp() == 'H' && (playerX%4) == 0)
                     moveDirection = 2;*/
                  else if(detectNextBlock_Right(x,y,h,w) == 'W')
                    moveDirection = 1;
                  else
                    moveDirection = 3;
              }
          }
          return(moveDirection);
        }
        
        
         function movePlayer(x,y,h,w, moveDirection, playerSpeed)
        { 
            
            //check if block is digged
            var block_left, block_right;
            var digged = 0;
               
            var coordLeft = coord_CurrentLeft(x,y,h,w); 
            block_left = map_comp[coordLeft[1]][coordLeft[0]];
            
            var coordRight = coord_CurrentRight(x,y,h,w);
            block_right = map_comp[coordRight[1]][coordRight[0]];
            
            if( detectNextBlock_CurrentLeftUp(x,y,h,w) == 'W' && detectNextBlock_CurrentLeftUp(x,y,h,w) == 'W')
            {
                if((block_left.digged == 1 || block_right.digged == 1)&&(block_left.diggedTimer <= 150 && block_right.diggedTimer <= 150))
                {
                    //töten
                    console.log("Tot! Tot! Grausamer Tot!");
                }
                else if(detectNextBlock_DownLeft(x,y,h,w) == 'W')
                {
                     var coordLeft = coord_DownLeft(x,y,h,w); 
                    block_left = map_comp[coordLeft[1]][coordLeft[0]];

                    if(detectNextBlock_DownRight(x,y,h,w) == 'W' && block_left.digged == 1)
                    {
                        var coordRight = coord_DownRight(x,y,h,w);
                        block_right = map_comp[coordRight[1]][coordRight[0]];

                        if(block_right.digged == 1)
                        {
                            digged = 1;
                        }
                    }
                    else
                    {
                        digged = 0;
                    }

                }
                else
                {
                   digged = 0;
                }
            }
            else if(detectNextBlock_DownLeft(x,y,h,w) == 'W')
            {
                 var coordLeft = coord_DownLeft(x,y,h,w); 
                block_left = map_comp[coordLeft[1]][coordLeft[0]];
                
                if(detectNextBlock_DownRight(x,y,h,w) == 'W' && block_left.digged == 1)
                {
                    var coordRight = coord_DownRight(x,y,h,w);
                    block_right = map_comp[coordRight[1]][coordRight[0]];
                    
                    if(block_right.digged == 1)
                    {
                        digged = 1;
                    }
                }
                else
                {
                    digged = 0;
                }

            }
            else
            {
               digged = 0;
            }
            
            //console.log("coordLeft: " + coordLeft[0] + ", " + coordLeft[1]);
                    
            
            
            //console.log("Left digged: " + block_left.digged + ", Right digged: " + block_right.digged);
            //fall
            if (
                ((detectNextBlock_DownLeft(x, y, h, w) == '.' && detectNextBlock_DownRight(x,y,h,w) == '.') || //when underneath is air
                  (detectNextBlock_DownLeft(x,y,h,w) == '-' && detectNextBlock_DownRight(x,y,h,w) == '-') || //or a pole
                  (detectNextBlock_DownLeft(x,y,h,w) == 'T' && detectNextBlock_DownRight(x,y,h,w) == 'T') ||
                   ( digged == 1)) &&// or a treasure
                  (detectNextBlock_CurrentLeftDown(x, y, h, w) != '-' || detectNextBlock_CurrentRightDown(x,y,h,w) != '-')//
                ) 
            {
               y += playerSpeed;
               moveDirection = 0;
            }
            /*else if((detectNextBlock_DownLeft(x,y,h,w) == 'W' || detectNextBlock_DownRight(x,y,h,w) == 'W'))
            {
                if((block_left.digged == 1 && block_right.digged == 1))
                {
                    y += playerSpeed;
                    moveDirection = 0; 
                }
            }*/
            //left
            else if(moveDirection == 1 && detectNextBlock_Left(x,y,h,w) != 'W' && x != 24 && detectNextBlock_LeftDown(x,y,h,w) != 'W')//left
            {
                //Pole little bit above
                if(detectNextBlock_Left(x,y, h, w) == '-' && detectNextBlock_LeftDown(x,y, h, w) != '-')
                {
                    y -=playerSpeed;
                }
                //Pole little bit underneath
                else if(detectNextBlock_Left(x,y, h, w) != '-' && detectNextBlock_LeftDown(x,y, h, w) == '-')
                {
                    //console.log("In Exeption");
                    y +=playerSpeed;
                }
                //Frage
                //ladder at top
                else if (detectNextBlock_Left(x,y,h,w) == '.' &&
                        detectNextBlock_LeftDown(x,y,h,w) == 'W' &&
                        detectNextBlock_CurrentLeftDown(x,y,h,w) == 'H')
                {
                    y -= playerSpeed;
                    console.log("in ladder Top");
                }
                //ladder at bottom
                else if (detectNextBlock_Left(x,y,h,w) == 'W' &&
                        detectNextBlock_LeftDown(x,y,h,w) == '.' &&
                        detectNextBlock_CurrentLeftUp()(x,y,h,w) == 'H')
                {
                    y += playerSpeed;
                }
                else
                {
                    x -= playerSpeed;
                }
            }
            //up
            else if(moveDirection == 2 &&                                        
                    (((detectNextBlock_UpLeft(x,y, h, w) == 'H' || detectNextBlock_UpRight(x, y, h, w) == 'H')//ladder above
                    ||
                    (detectNextBlock_CurrentRightDown(x, y, h, w) == 'H' || detectNextBlock_CurrentLeftDown(x, y, h, w) == 'H'))
                    ||
                    ((detectNextBlock_UpLeft(x, y, h, w) == 'h' || detectNextBlock_UpRight(x, y, h, w) == 'h')
                    && (detectNextBlock_CurrentRightDown(x, y, h, w) == 'H' || detectNextBlock_CurrentLeftDown(x, y, h, w) == 'H')))
               
                   )//on ladder
            {
                //ladder on rightside
                if (detectNextBlock_CurrentLeftUp(x, y, h, w) != 'H' && detectNextBlock_CurrentRightUp(x, y, h, w) == 'H')
                {
                    x += playerSpeed;
                }
                else if (detectNextBlock_CurrentLeftUp(x, y, h, w) == 'H' && detectNextBlock_CurrentRightUp(x, y, h, w) != 'H')
                {
                    x -= playerSpeed;
                }
                else
                {
                    y -= playerSpeed;
                }
            }
            //right
             else if(moveDirection == 3 && detectNextBlock_Right( x, y, h, w) != 'W' &&  x != 768 && detectNextBlock_RightDown( x, y, h, w) != 'W')//right
            {   
                //Frage
                //Pole little bit above
                if(detectNextBlock_Right(x,y, h, w) == '-' && detectNextBlock_RightDown(x,y, h, w) != '-')
                {             
                    y -= playerSpeed;
                }
                //Pole Little bit underneath
                else if(detectNextBlock_Right(x,y, h, w) != '-' && detectNextBlock_RightDown(x,y, h, w) == '-')
                {
                    //console.log("In Exeption");
                    y += playerSpeed;
                }
                //Nearly at top of ladder
                else if(detectNextBlock_Right(x,y, h, w) == '.' && detectNextBlock_CurrentRightDown(x,y,h,w) == 'H' && detectNextBlock_UpRight(x,y,h,w) != 'H')
                {
                    y -= playerSpeed;
                }
                else
                {
                    x +=  playerSpeed;
                }
            }
            //down
             else if( moveDirection == 4 &&
                     (detectNextBlock_DownLeft( x,  y,  h,  w) != 'W' || detectNextBlock_DownRight( x,  y,  h,  w) != 'W')
                    )//down
            {
                if ((detectNextBlock_DownLeft( x,  y,  h,  w) != 'W' && detectNextBlock_DownRight( x,  y,  h,  w) == 'W')||
                    (detectNextBlock_UpRight( x,  y,  h,  w)  == '-' && (detectNextBlock_CornerDownLeft(x,  y,  h,  w) == 'H' || detectNextBlock_Left(x,  y,  h,  w) == 'H')))
                {
                     x -=  playerSpeed;
                }
                else if ((detectNextBlock_DownLeft( x,  y,  h,  w) == 'W' && detectNextBlock_DownRight( x,  y,  h,  w) != 'W' )||
                         (detectNextBlock_UpLeft( x,  y,  h,  w)  == '-' && (detectNextBlock_CornerDownRight(x,  y,  h,  w) == 'H' || detectNextBlock_Right(x,  y,  h,  w) == 'H')))
                {
                     x +=  playerSpeed;
                }
                else
                {
                     y +=  playerSpeed;
                }
            }
            var xAndY = new Array();
            
            xAndY[0] = x;
            xAndY[1] = y;
            return(xAndY);
        }
        
        