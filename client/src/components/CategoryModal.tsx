import React, { FC, useEffect, useState } from 'react'
import { Form } from 'react-router-dom';

interface ICategoryModal {
    type: 'post' | 'patch';
    id?: string;
    title?: string;
    setVisibleModal: (visible: boolean) => void;
}

const CategoryModal: FC<ICategoryModal> = ({ type, id, title = '', setVisibleModal }) => {
    const [titleUpdate, setTitleUpdate] = useState<string>(title);

    useEffect(() => {
        setTitleUpdate(title);
    }, [title]);

    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 flex items-center justify-center'>
            <Form
                action='/categories'
                method={type}
                onSubmit={() => setVisibleModal(false)}
                className='grid gap-2 w-[300px] rounded-b-md bg-slate-900 p-5'>
                <label htmlFor='title'>
                    <small>Category Title</small>
                    <input
                        className='input w-full'
                        type="text"
                        name='title'
                        value={titleUpdate}
                        onChange={(e) => setTitleUpdate(e.target.value)}
                        placeholder='Title ...'
                    />
                    <input type='hidden' name='id' value={id}></input>
                </label>

                <div className='flex items-center gap-2'>
                    <button className='btn btn-green' type='submit'>
                        {type === 'patch' ? 'Save' : 'Create'}
                    </button>
                    <button onClick={() => setVisibleModal(false)} className='btn btn-red' type='button'>
                        Close
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default CategoryModal
