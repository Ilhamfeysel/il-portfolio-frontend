
import { useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { HiX } from "react-icons/hi";
import { downloadCV } from "../services/cvService";
import "./CVRequestModal.css";

type CVRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CVFormData = {
  fullName: string;
  email: string;
  company: string;
  message: string;
};

const initialFormData: CVFormData = {
  fullName: "",
  email: "",
  company: "",
  message: "",
};

function CVRequestModal({
  isOpen,
  onClose,
}: CVRequestModalProps) {
  const [formData, setFormData] =
    useState<CVFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  // Open and close the native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Update form fields
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Submit visitor information and download CV
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting || isSuccess) return;

    setIsSubmitting(true);
    setError("");

    try {
      await downloadCV(formData);

      setIsSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal and reset form
  const handleClose = () => {
    if (isSubmitting) return;

    onClose();
  };

  // Reset state when modal closes
  const handleDialogClose = () => {
    setFormData(initialFormData);
    setError("");
    setIsSuccess(false);
    setIsSubmitting(false);

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="cv-modal"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={handleDialogClose}
      onCancel={(event) => {
        if (isSubmitting) {
          event.preventDefault();
          return;
        }

        handleClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="cv-modal-content">
        <div className="cv-modal-header">
          <span className="cv-modal-label">
            LET'S CONNECT
          </span>

          <button
            type="button"
            className="cv-modal-close"
            onClick={handleClose}
            disabled={isSubmitting}
            aria-label="Close CV download form"
          >
            <HiX size={22} />
          </button>
        </div>

        {isSuccess ? (
          <div className="cv-modal-success" role="status">
            <h2 id={titleId}>
              Thanks for stopping by! 
            </h2>

            <p
              id={descriptionId}
              className="cv-modal-description"
            >
              Your CV download has started.
              I appreciate your interest in my work!
            </p>

            <button
              type="button"
              className="cv-modal-submit"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId}>
              Before you download my CV...
            </h2>

            <p
              id={descriptionId}
              className="cv-modal-description"
            >
              Thanks for your interest in my work!
              I'd love to know who's checking out my CV.
              Just introduce yourself below, and it's yours. 
            </p>

            <form
              onSubmit={handleSubmit}
              className="cv-modal-form"
            >
              <div className="cv-form-group">
                <label htmlFor="cv-full-name">
                  Full name <span>*</span>
                </label>

                <input
                  id="cv-full-name"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  maxLength={100}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="cv-form-group">
                <label htmlFor="cv-email">
                  Email address <span>*</span>
                </label>

                <input
                  id="cv-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="cv-form-group">
                <label htmlFor="cv-company">
                  Company{" "}
                  <span className="cv-optional">
                    (optional)
                  </span>
                </label>

                <input
                  id="cv-company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={120}
                  disabled={isSubmitting}
                />
              </div>

              <div className="cv-form-group">
                <label htmlFor="cv-message">
                  Message{" "}
                  <span className="cv-optional">
                    (optional)
                  </span>
                </label>

                <textarea
                  id="cv-message"
                  name="message"
                  placeholder="Want to say hello?"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <p
                  className="cv-modal-error"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="cv-modal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Preparing your CV..."
                  : "Download My CV"}
              </button>

              <p className="cv-modal-privacy">
                Your details will be shared with me
                so I know who's downloaded my CV.
                I'll only use them for professional
                follow-up. No spam!
              </p>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

export default CVRequestModal;

