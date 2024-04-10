export interface IModuleInputProps {
  value: string;
  onChange?: (value: string) => void;
}

export type Module = {
  _id: string;
  name: string;
  description: string;
  thumbnail: {
    ETag: string;
    Location: string;
    key: string;
    Key: string;
    Bucket: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  programID: string;
};
