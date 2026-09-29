import { diskStorage } from "multer";

export const multerAvatarConfig = {
  storage: diskStorage({
    destination: './uploads/avatars',
    filename: (_req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName);
    },
  }),
};

