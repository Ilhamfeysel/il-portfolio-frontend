
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

  if (!downloadResponse.ok) {
    throw new Error("Unable to download the CV.");
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
