// // src/assets/Introduction.tsx
// import Michelle from "./Pictures/Michelle.jpeg";
// import Kevin    from "./Pictures/Kevin.jpeg";
// import Ritvik   from "./Pictures/Ritvik.jpeg";
// import Micheal  from "./Pictures/Micheal.jpeg";



// //This is my parent component
// import { useState } from 'react';

// export default function Introduction() {
//   // Example of state: just to illustrate changes
//   const [selectedCard, setSelectedCard] =  useState<string | null>(null);

//   return (
//     <div
//       style={{
//         width: 1024,
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         gap: 32,
//         display: 'inline-flex',
//         flexWrap: 'wrap',
//         alignContent: 'flex-start',
//       }}
//     >
//       {/* Card 1 */}
//       <div
//         style={{
//           width: 232,
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: 12,
//           display: 'inline-flex',
//           cursor: 'pointer',
//         }}
//         onClick={() => setSelectedCard('Michelle')}
//       >
//         <div
//           style={{
//             alignSelf: 'stretch',
//             height: 232,
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 8,
//             backgroundImage: Michelle,
//           }}
//         >
//           <div
//             style={{
//               width: 200,
//               left: 16,
//               top: 16,
//               position: 'absolute',
//               color: 'white',
//               fontSize: 32,
//               fontFamily: 'Inter',
//               fontWeight: '600',
//               lineHeight: 32,
//             }}
//           >
//             Michelle
//           </div>
//         </div>
//       </div>

//       {/* Card 2 */}
//       <div
//         style={{
//           width: 232,
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: 12,
//           display: 'inline-flex',
//           cursor: 'pointer',
//         }}
//         onClick={() => setSelectedCard('Kevin')}
//       >
//         <div
//           style={{
//             alignSelf: 'stretch',
//             height: 232,
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 8,
//             backgroundImage: 'my-react-app\src\assets\Pictures\Kevin.jpeg',
//           }}
//         >
//           <div
//             style={{
//               width: 200,
//               left: 16,
//               top: 16,
//               position: 'absolute',
//               color: 'white',
//               fontSize: 32,
//               fontFamily: 'Inter',
//               fontWeight: '600',
//               lineHeight: 32,
//             }}
//           >
//             Kevin
//           </div>
//         </div>
//       </div>

//       {/* Card 3 */}
//       <div
//         style={{
//           width: 232,
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: 12,
//           display: 'inline-flex',
//           cursor: 'pointer',
//         }}
//         onClick={() =>setSelectedCard('Micheal')}
//       >
//         <div
//           style={{
//             alignSelf: 'stretch',
//             height: 232,
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 8,
//             backgroundImage: 'url(${Micheal})',
//           }}
//         >
//           <div
//             style={{
//               width: 200,
//               left: 16,
//               top: 16,
//               position: 'absolute',
//               color: 'white',
//               fontSize: 32,
//               fontFamily: 'Inter',
//               fontWeight: '600',
//               lineHeight: 32,
//             }}
//           >
//             Michael
//           </div>
//         </div>
//       </div>

//       {/* Optional: Show which card is selected */}
//       {selectedCard && (
//         <div style={{ marginTop: 20 }}>Selected: {selectedCard}</div>
//       )}
//     </div>
//   );
// }

// src/assets/Introduction.tsx
import React from "react";
import Michelle from "./Pictures/Michelle.jpeg";
import Kevin    from "./Pictures/Kevin.jpeg";
import Ritvik   from "./Pictures/Ritvik.jpeg";
import Micheal  from "./Pictures/Micheal.jpeg";

export default function Introduction() {
  // quick debug logs
  console.log("Michelle ->", Michelle);
  console.log("Kevin    ->", Kevin);
  console.log("Ritvik   ->", Ritvik);
  console.log("Micheal  ->", Micheal);

  return (
    <div style={{ padding: 20 }}>
      <h1>Introduction component — TEST</h1>
      <p>If you see this, the component is rendering.</p>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <div>
          <img src={Michelle} alt="Michelle" style={{ width: 120, height: 120, objectFit: "cover" }} />
          <div>Michelle</div>
        </div>
        <div>
          <img src={Kevin} alt="Kevin" style={{ width: 120, height: 120, objectFit: "cover" }} />
          <div>Kevin</div>
        </div>
        <div>
          <img src={Ritvik} alt="Ritvik" style={{ width: 120, height: 120, objectFit: "cover" }} />
          <div>Ritvik</div>
        </div>
        <div>
          <img src={Micheal} alt="Micheal" style={{ width: 120, height: 120, objectFit: "cover" }} />
          <div>Micheal</div>
        </div>
      </div>
    </div>
  );
}
