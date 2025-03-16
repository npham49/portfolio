export const getContactLink = (subject?: string, message?: string) => {
    const email = "neel@neel.com";
    let mailtoLink = `mailto:${email}`;

    const params = new URLSearchParams();
    if (subject) params.append("subject", subject);
    if (message) params.append("body", message);

    const queryString = params.toString();
    if (queryString) {
        mailtoLink += `?${queryString}`;
    }

    return mailtoLink;
}