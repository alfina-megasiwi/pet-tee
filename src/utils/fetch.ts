"use server";

type Methods = "GET" | "POST" | "PATCH" | "DELETE";

export const fetchData = async ({
  url,
  method = "GET",
  body,
}: {
  url: string;
  method?: Methods;
  body?: object;
}) => {
  const reqBody = body ? JSON.stringify(body) : undefined;

  const response = await fetch(url, {
    cache: "no-store",
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: reqBody,
  });

  if (response.ok) {
    return await response.json();
  }

  let errorMessage = `${response.status} ${response.statusText}`;
  try {
    const errorData = await response.json();
    console.error("API error payload:", errorData);

    if (errorData?.error || errorData?.message) {
      errorMessage += ` - ${errorData.error || errorData.message}`;
    }
  } catch (err) {
    console.error("Failed to parse JSON response", err);
  }

  throw new Error(errorMessage);
};
