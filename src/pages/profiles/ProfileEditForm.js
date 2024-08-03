import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useEffect } from 'react';
import { axiosReq } from '../../api/AxiosDefaults';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/UserCurrentContext'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import btnStyles from '../../styles/Button.module.css'
import appStyles from '../../App.module.css'
import Alert from 'react-bootstrap/Alert';

const ProfileEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const imageInput = useRef(null);

    const [profileData, setProfileData] = useState({
        name: "",
        bio: "",
        files: "",
        image: "",
    });

    const {
        name,
        bio,
        files,
        image
    } = profileData;

    useEffect(() => {
        const handleMount = async () => {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}/`);
                    const { name, bio, image, files, is_owner
                    } = data;
                    is_owner ? setProfileData({ name, bio, image, files }) : history.push("/gallery");
                    
                } catch (err) {
                    history.push("/gallery");
                }
        };

        handleMount();
    }, [currentUser, history, id]);

    const handleChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setProfileData({
                ...profileData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("bio", bio);
        formData.append("files", files)

        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));
            toast.success("Profile edited")
            history.push(`/profiles/${id}`);
            setLoading(false)
        } catch (err) {
            setErrors(err.response?.data);
            console.log(err.response.data)
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    value={name}
                    name='name'
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    as="textarea"
                    value={bio}
                    name='bio'
                    onChange={handleChange}
                    rows={2}
                />
            </Form.Group>
            {errors?.bio?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Attachments</Form.Label>
                <Form.Control
                    type='url'
                    value={files}
                    placeholder="https://example.com"
                    name='files'
                    onChange={handleChange}
                />

            </Form.Group>
            {errors?.attachments?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button disabled={loading}
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                Save changes
            </Button>

            <Form.Group className="text-center">
                <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                    <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                    >
                        Change the image
                    </Form.Label>
                </div>

                <Form.File
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}


        </Form>
    )
}

export default ProfileEditForm