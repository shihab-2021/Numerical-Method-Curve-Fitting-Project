import React from "react";
import "./LeastSquares.css";

const LeastSquares = () => {
  return <div id="main">
            <div>
             <h4>Method-1 of solution :</h4>
             <p>Straight line equation is y=a+bx.</p>
             <p>The normal equations are </p>
             <p>∑y=an+b∑x </p>
             <p>∑xy=a∑x+b∑x<sup>2</sup></p>
            </div>  
            <div>
              <p>The values are calculated using the following table</p>
              <table border="1">
                     <tr>
                      <th class="tdata">x</th>
                      <th class="tdata">y</th>
                      <th class="tdata">x<sup>2</sup></th>
                      <th class="tdata">x.y</th>
                     </tr>
                     <tr>
                      <td class="tdata">0</td>
                      <td class="tdata">-1</td>
                      <td class="tdata">0</td>
                      <td class="tdata">0</td>
                     </tr>
                     <tr>
                      <td class="tdata">2</td>
                      <td class="tdata">5</td>
                      <td class="tdata">4</td>
                      <td class="tdata">10</td>
                     </tr>
                     <tr>
                      <td class="tdata">5</td>
                      <td class="tdata">12</td>
                      <td class="tdata">25</td>
                      <td class="tdata">60</td>
                     </tr>
                     <tr>
                      <td class="tdata">7</td>
                      <td class="tdata">20</td>
                      <td class="tdata">49</td>
                      <td class="tdata">140</td>
                     </tr>
                     <tr>
                      <td class="tdata">∑x=14</td>
                      <td class="tdata">∑y=36</td>
                      <td class="tdata">∑x<sup>2</sup>=78</td>
                      <td class="tdata">∑x.y=210</td>
                     </tr>

              </table>
              <p>Substituting these values in the normal equations</p>
              <p>4a+14b=36</p>
              <p>14a+78b=210</p>
              <p>Solving these two equations using Elimination method,</p>
              <p>4a+14b=36</p>
              <p>4a+14b=36</p>
              <p>2a+7b=18</p>
              <p>and 14a+78b=210</p>
              <p>2(7a+39b)=2⋅105</p>
              <p>7a+39b=105</p>
              <p>2a+7b=18→(1)</p>
              <p>2a+7b=18→(1)</p>
              <p>equation(1)×7⇒14a+49b=126</p>
              <p>equation(1)×7⇒14a+49b=126</p>
              <p>Substracting ⇒-29b=-84</p>
              <p>⇒29b=84</p>
              <p>⇒b=84/29</p>
              <p>⇒b=2.8966</p>
              <p>Putting b=2.8966 in equation (1), we have</p>
              <p>2a+7(2.8966)=18</p>
              <p>⇒2a=18-20.2759</p>
              <p>⇒2a=-2.2759</p>
              <p>⇒a=-2.2759/2</p>
              <p>⇒a=-1.1379</p>
              <p>∴ a=-1.1379andb=2.8966</p>
              <p>Now substituting this values in the equation is y=a+bx, we get</p>
              <p>y=-1.1379+2.8966x</p>
            </div>
     
         </div>;
};

export default LeastSquares;
