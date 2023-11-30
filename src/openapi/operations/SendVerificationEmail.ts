/* eslint-disable @typescript-eslint/no-unused-vars */
import api from "../utils/api";
import { authStore } from "@/auth/auth";
import {formDatafy} from "../utils/formdata";
import type * as Components from "../components";
import type { PagedCollection } from "../types/collection";

interface SendVerificationEmailParams {
    
}

interface SendVerificationEmailRequestBody {
    "email":string;
    
}

export interface SendVerificationEmailResponseBody {
}

export async function SendVerificationEmail(requestBody: SendVerificationEmailRequestBody, params: SendVerificationEmailParams = {}) {
    const options = {
        method: "POST",
        headers: new Headers({
            "Authorization": "Bearer "+ (authStore.idToken??''),
            "Content-Type": "application/ld+json",
        }),
        body: JSON.stringify(requestBody),
    }
    const response = await api("/api/send_verification_email", {...options, params: params});
    const data = await response.json();
    return data as SendVerificationEmailResponseBody;
}