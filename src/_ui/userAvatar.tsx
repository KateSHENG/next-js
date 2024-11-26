// import { useSession } from "next-auth/react"
// import { SignOut } from "./signout-button";
// import Link from 'next/link'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// export default function UserAvatar() {
//     const { data: session } = useSession();

//     if(session === null || session === undefined || !session.user) return <Link href="/login">Login</Link>
//     // if (!session.user.image||session.user.image===null) return (<div>
//     //     {session.user.name}
//     //     <SignOut />
//     //     </div>)
//     return (
        
//         <Stack
//         direction="row"
//         sx={{
//         p: 2,
//         gap: 1,
//         alignItems: 'center',
//         borderTop: '1px solid',
//         borderColor: 'divider',
//         }}
//     >
//         {session.user.image&&session.user.image!==null&&
//         <Avatar
//         sizes="small"
//         alt={session.user.name??''}
//         src={session.user.image}
//         sx={{ width: 36, height: 36 }}
//         />}
//         <Box sx={{ mr: 'auto' }}>
//         <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
//         {session.user.name}
//         </Typography>
//         <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//         {session.user.email}
//         </Typography>
//         </Box>
//         {/* <OptionsMenu /> */}
//     </Stack>
//     )
// }


