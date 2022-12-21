import { Route, Routes } from "react-router-dom"
import { Login } from "../componets/auth/Login"
import { Register } from "../componets/auth/Register"
import { SuggestionForm } from "../componets/suggest/SuggestForm"
import { Watches } from "../componets/watch/Watches"
import { Authorized } from "./AuthorizedViews"





export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/suggestion" element={<SuggestionForm />} />
                <Route path="/watches" element={<Watches />} />
            </Route>
        </Routes>
    </>
}