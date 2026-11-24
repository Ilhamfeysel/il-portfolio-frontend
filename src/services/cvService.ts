
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080";

export interface CVFormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

interface CVResponse {
  message: string;
  downloadToken: string;
}

export async function downloadCV(
  formData: CVFormData
): Promise<void> {

  const response = await fetch(`${API_URL}/api/cv/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  // Handle rate limit
  if (response.status === 429) {
    throw new Error(
      "You've reached the CV download limit. " +
      "Please wait a few minutes before trying again."
    );
  }

  // Handle validation errors
  if (response.status === 400) {
    throw new Error(
      "Please check your information and try again."
    );
  }

  // Handle temporarily unavailable email service
  if (response.status === 503) {
    throw new Error(
      "The CV download service is temporarily unavailable. " +
      "Please try again later."
    );
  }

  // Handle other unexpected errors
  if (!response.ok) {
    throw new Error(
      "Unable to prepare your CV download. Please try again."
    );
  }

  const data: CVResponse = await response.json();

  if (!data.downloadToken) {
    throw new Error("Download token was not received.");
  }

  const downloadResponse = await fetch(
    `${API_URL}/api/cv/download?token=${encodeURIComponent(
      data.downloadToken
    )}`
  );

  if (downloadResponse.status === 403) {
    throw new Error(
      "Your download link has expired or has already been used."
    );
  }

  if (!downloadResponse.ok) {
    throw new Error(
      "Unable to download the CV. Please try again."
    );
  }

  const blob = await downloadResponse.blob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "Ilham_Feysel_CV.pdf";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

