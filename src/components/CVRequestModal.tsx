
import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { HiX } from "react-icons/hi";
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

function CVRequestModal({ isOpen, onClose }: CVRequestModalProps) {
  const [formData, setFormData] = useState<CVFormData>(initialFormData);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend integration will be implemented later.
    // No personal information is sent or stored yet.
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="cv-modal"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="cv-modal-content">
        <div className="cv-modal-header">
          <span className="cv-modal-label">LET'S CONNECT</span>

          <button
            type="button"
            className="cv-modal-close"
            onClick={handleClose}
            aria-label="Close CV request form"
          >
            <HiX size={22} />
          </button>
        </div>

        <h2 id={titleId}>Before you download my CV...</h2>

        <p id={descriptionId} className="cv-modal-description">
          I'd love to know a little about you too! Introduce yourself
          below, and you'll be able to download my CV.
        </p>

        <form onSubmit={handleSubmit} className="cv-modal-form">
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
              required
            />
          </div>

          <div className="cv-form-group">
            <label htmlFor="cv-company">
              Company <span className="cv-optional">(optional)</span>
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
            />
          </div>

          <div className="cv-form-group">
            <label htmlFor="cv-message">
              Message <span className="cv-optional">(optional)</span>
            </label>
            <textarea
              id="cv-message"
              name="message"
              placeholder="Tell me a little about yourself..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
              maxLength={1000}
            />
          </div>

          <button
            type="submit"
            className="cv-modal-submit"
            disabled
            title="CV download will be available after backend integration"
          >
            Submit & Download CV
          </button>

          <p className="cv-modal-privacy">
            Your information will only be used for professional
            follow-up. Form submission is not available yet.
          </p>
        </form>
      </div>
    </dialog>
  );
}

export default CVRequestModal;
