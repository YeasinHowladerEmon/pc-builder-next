import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";


const login = () => {
    return (
        <div className='text-center my-[400px]'>
            <button className='btn' onClick={() => signIn('github', {
                callbackUrl: 'http://127.0.0.1:3000/',
            })}>Sign in with Github</button>
        </div>
    );
};

export default login;
login.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}