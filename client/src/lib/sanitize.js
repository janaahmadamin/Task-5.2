import DOMPurify from 'dompurify';

export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty, { ALLOWED_TAGS: ['b', 'strong', 'i', 'em', 'p', 'br', 'a'],ALLOWED_ATTR: ['href'] });

