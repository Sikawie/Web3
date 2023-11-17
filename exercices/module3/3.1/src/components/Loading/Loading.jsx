const Loading = () => <p>Loading...</p>;
export default Loading;

import React, { useState, useEffect } from 'react';

// const Loading = () => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Utilisez un setTimeout pour simuler un chargement de 3 secondes
//         setTimeout(() => {
//             setLoading(false);
//         }, 3000);
//     }, []);

//     return (
//         <div>
//             {loading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <div>AYYYYY ça maRCHEE {'>'}:D</div>
//       )}
//         </div>
//     );
// }

// export default Loading;