interface Admin {
    role: string;
}
interface User {
    email: string;
}

// Method 1: use `in` keyword
function redirect(data: Admin | User) {
    if ("role" in data) {
        // use the `data` operator for typeguards since TS 2.7+
        // routeToAdminPage(data.role);
    } else {
        //  routeToUserProfilePage(data.email);
    }
}

// Method 2: custom type guard, does the same thing in older TS versions or where `in` isnt enough
function isAdmin(user: Admin | User): user is Admin {
    return (user as any).role !== undefined;
}

function isUser(user: Admin | User): user is User {
    return (user as any).email !== undefined;
}

type BaseProps = {
    className?: string,
    style?: React.CSSProperties
    name: string // used in both
}
type DogProps = {
    tailsCount: number
}
type HumanProps = {
    handsCount: number
}

export const Human = (props: BaseProps | HumanProps) => {
    return <>
        fcbdfvd
    </>
}
export const Dog = (props: BaseProps & DogProps) => {
    return <>
        dgvdfg
    </>
}

function App(params?: any) {
    return <>
        <Human handsCount={2} />
        <Dog name="Cat" tailsCount={4} />

    </>
}