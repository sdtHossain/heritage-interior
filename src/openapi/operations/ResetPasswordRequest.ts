/* eslint-disable @typescript-eslint/no-unused-vars */
import api from "../utils/api";
import { authStore } from "@/auth/auth";
import {formDatafy} from "../utils/formdata";
import type * as Components from "../components";
import type { PagedCollection } from "../types/collection";

interface ResetPasswordRequestParams {
    
}

interface ResetPasswordRequestRequestBody {
    "email":string;
    
}

export interface ResetPasswordRequestResponseBody {
}

export async function ResetPasswordRequest(requestBody: ResetPasswordRequestRequestBody, params: ResetPasswordRequestParams = {}) {
    const options = {
        method: "POST",
        headers: new Headers({
            "Authorization": "Bearer "+ (authStore.idToken??''),
            "Content-Type": "application/ld+json",
        }),
        body: JSON.stringify(requestBody),
    }
    const response = await api("/api/reset_password_request", {...options, params: params});
    const data = await response.json();
    return data as ResetPasswordRequestResponseBody;
}